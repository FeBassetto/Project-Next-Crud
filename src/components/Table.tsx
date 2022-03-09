import Client from "../core/Client"
import { editIcon, trashIcon } from "./Icons"

interface TableProps {
    clients: Client[]
}


export default function Table(props: TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }

    function renderDatas() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 == 0 ? "bg-purple-200" : "bg-purple-100"} `}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    <td>{renderActions(client)}</td>
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                <button className={`
                    flex justify-center items-center
                    text-green-600 rounded-full
                    hover:bg-purple-50 p-2 m-1
                `}>
                    {editIcon}
                </button>

                <button className={`
                    flex justify-center items-center
                    text-red-500 rounded-full
                    hover:bg-purple-50 p-2 m-1
                `}>
                    {trashIcon}
                </button>
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800 
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDatas()}
            </tbody>
        </table>
    )
}