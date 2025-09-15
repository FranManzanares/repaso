"use client"

import { useEffect, useState } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";

export default function main() {
    const [usuarios, setUsuarios] = useState([]);



    useEffect(() => {
        fetch("http://localhost:4006/usuarios")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsuarios(data)
            })
    }, [])


    function ver() {
        console.log(usuarios)
    }


    return (
        <>
            <Title text={"Este es el main"}/>

            <p>¿Que usuario queres borrar?</p>
            
            <Button onClick={ver} text={"Ver usuarios en console.log"}/>

        
        
        </>
    )    
}