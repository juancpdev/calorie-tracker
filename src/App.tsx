import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className=" bg-slate-700 w-full py-6 border-b">
        <div className=" flex justify-center ">
          <h1 className=" text-white font-bold text-2xl animate-jump animate-once animate-normal">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-slate-800 py-20">
        <div className=" w-auto max-w-3xl mx-auto">
          <Form
            dispatch = {dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
