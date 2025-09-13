"use client"

import "./register.styles.css";
import { useState } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Register() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function saveUser(event) {
        setUser(event.target.value)
    }

    function savePassword(event) {
        setPassword(event.target.value)
    }

    function watch() {
        console.log(user)
        console.log(password)
    }

    function registrarse() {
        fetch("http://localhost:4006/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: user,
                contraseña: password,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Usuario creado");
            })
    }

    return (
        <div className="register-container">
            <Title text={"Registrarse"} />

            <h2>Usuario</h2>
            <Input type="text" placeholder={"Nombre de usuario"} onChange={saveUser} />

            <h2>Contraseña</h2>
            <Input type="text" placeholder={"Contraseña nueva"} onChange={savePassword} />

            <Button text="Registrarse" onClick={registrarse} />
            <Button text="prueba" onClick={watch} className="secondary" />
        </div>  
    )
}