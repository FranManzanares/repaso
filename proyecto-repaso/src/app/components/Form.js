import Button from "./Button";
import Input from "./input";
import Title from "./Title";

function Hola() {
  console.log("Hola");
}


export default function Form() {
    return (
        <>
            <div>
                <Title text="Login" />
            </div>
            <div>
                <Input type="text" placeholder="Usuario" />
                <Input type="text" placeholder="Contraseña" />
            </div>

            <div>
                <Button text="Iniciar sesión" onClick={Hola} />
            </div>

        </>

    )
}