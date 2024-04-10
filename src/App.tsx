import Form from "./components/Form"

function App() {

  return (
    <>
      <header className=" bg-slate-600 w-full py-6 border-b">
        <div className=" flex justify-center ">
          <h1 className=" text-white font-bold text-2xl animate-jump animate-once animate-normal">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-slate-800 py-20">
        <div className=" w-auto max-w-4xl mx-auto">
          <Form/>
        </div>
      </section>
    </>
  )
}

export default App
