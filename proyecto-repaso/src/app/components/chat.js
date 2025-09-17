"use client"

import { useState, useEffect } from "react"
import Input from "./Input";
import Button from "./Button";

export default function Chat() {
    const [mensajes, setMensajes] = useState([])
    const [nuevoMensaje, setNuevoMensaje] = useState("")

    useEffect(() => {
        fetch("http://localhost:4006/usuarios") // Nota: ¡La URL puede variar! Asegúrate de que apunte a los mensajes y no a los usuarios
            .then(response => response.json())
            .then(data => {
                setMensajes(data)
            })
    }, [])

    function saveMessage(event) {
        setNuevoMensaje(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4006/mensajes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                texto: nuevoMensaje
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Mensaje enviado:', data);
                setMensajes(prevMensajes => [...prevMensajes, data]);
                setNuevoMensaje(''); // Opcional: limpia el input después de enviar
            });
    };

    return (
        <>
            {mensajes.map((mensaje, index) => (
                <p key={index}>{mensaje.text}</p>
            ))}

            <form onSubmit={handleSubmit}>
                <Input type="text" value={nuevoMensaje} onChange={saveMessage}></Input>
                <Button type="submit" text={"Enviar"}></Button>
            </form>
        </>
    );
}