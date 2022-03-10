import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, 1),
    new Client('João', 21, 2),
    new Client('José', 15, 3),
    new Client('Jorge', 13, 4),
  ]

  function selectClient(client: Client) {
    console.log(`Editar ${client.name}`)
  }

  function excludeClient(client: Client) {
    console.log(`Excluir ${client.name}`)
  }


  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Cadastro simples" >

        <div className="flex justify-end">
          <Button color="green" className="mb-4">
            Novo cliente
          </Button>
        </div>

        <Table
          clients={clients}
          selectedClient={selectClient}
          excludeClient={excludeClient} />

          <Form client={clients[0]}></Form>

      </Layout>

    </div>
  )
}
