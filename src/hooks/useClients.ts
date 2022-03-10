import { useEffect, useState } from "react"
import ColectionClient from "../backend/db/ColectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useVisible from "./useVisible"

export default function useClients(){
    const repo: ClientRepository = new ColectionClient()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    const {
        setTable,
        setForm,
        visibleForm,
        visibleTable
    } = useVisible()
  
    useEffect(getAll, [])
  
    function getAll() {
      repo.getAll().then(clients => {
        setClients(clients)
        setTable()
      })
    }
  
    function selectClient(client: Client) {
      setClient(client)
      setForm()
    }
  
    async function excludeClient(client: Client) {
      await repo.exclude(client)
      getAll()
    }
  
    async function saveClient(client: Client) {
      await repo.save(client)
      getAll()
    }
  
    function newClient() {
      setClient(Client.empty)
      setForm()
    }

    return{
        saveClient,
        newClient,
        excludeClient,
        selectClient,
        getAll,
        client,
        clients,
        visibleForm,
        visibleTable,
        setTable,
        setForm
    }
}