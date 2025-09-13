"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";



export default function Form() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const router = useRouter();





    useEffect(() => {
        fetch("http://localhost:4006/usuarios")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsuarios(data)
            })
    }, [])

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

    function login() {
        for (let i = 0; i < usuarios.length; i++) {
            if (user == usuarios[i].usuario && password == usuarios[i].contraseña) {
                router.push("/principal")
                console.log("Iniciaste sesion!")
            }
        }
    }




    return (
        <>
            <div>
                <Title text="Login" />
            </div>
            <div>
                <Input type="text" placeholder="Usuario" onChange={saveUser} />
                <Input type="password" placeholder="Contraseña" onChange={savePassword} />
            </div>

            <div>
                <Button text="Iniciar sesión" onClick={login} />
            </div>

            <div>
                <Button text="Registrarse" onClick={() => router.push("/register")} />
            </div>

        </>

    )
}