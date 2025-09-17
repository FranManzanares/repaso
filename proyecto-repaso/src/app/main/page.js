"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 👈 importo el router
import Title from "../components/Title";
import Button from "../components/Button";

export default function Main() {
    const [usuarios, setUsuarios] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const router = useRouter(); // 👈 inicializo el router

    // Traer usuarios
    useEffect(() => {
        fetch("http://localhost:4006/usuarios")
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
            })
            .catch(err => console.error("Error cargando usuarios:", err));
    }, []);

    // Eliminar usuario
    const handleDelete = async () => {
        if (!selectedUser) return;

        try {
            await fetch(`http://localhost:4006/usuarios/${selectedUser}`, {
                method: "DELETE",
            });

            setUsuarios(usuarios.filter(u => u.id !== parseInt(selectedUser)));
            setSelectedUser("");
        } catch (err) {
            console.error("Error eliminando usuario:", err);
        }
    };

    return (
        <>
            <Title text="Este es el main" />

            <p>¿Qué usuario querés borrar?</p>

            {/* Dropdown */}
            <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
            >
                <option value="">-- Seleccioná un usuario --</option>
                {usuarios.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.usuario}
                    </option>
                ))}
            </select>

            <Button onClick={handleDelete} text="Eliminar" disabled={!selectedUser} />

            <h3>Usuarios actuales:</h3>
            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>{user.usuario}</li>
                ))}
            </ul>

            {/* Botón para volver a la página principal */}
            <Button onClick={() => router.push("/")} text="Volver a la página principal" />
        </>
    );
}
