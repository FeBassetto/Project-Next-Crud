import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import FormInput from "./FormInput";

interface FormProps {
    client: Client
    canceled?: () => any
    switchClient?: (client: Client) => any
}

export default function Form(props: FormProps) {

    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? null)

    return (
        <div>
            {id && <FormInput
                text="Código"
                inputValue={id}
                className="mb-5"
            />
            }

            <FormInput
                text="Nome"
                inputValue={name}
                inputOnChange={setName}
                className="mb-5" />

            <FormInput
                text="Idade"
                inputValue={age}
                inputType="number"
                inputOnChange={setAge}
                className="mb-5"
            />

            <div className="flex justify-end mt-7">
                <Button 
                buttonOnclick={() => props.switchClient?.(new Client(name, age, id))}
                color="blue" 
                className="mr-2"
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button 
                color="gray" 
                buttonOnclick={props.canceled}>
                    Cancelar
                </Button>
            </div>

        </div>
    )
}