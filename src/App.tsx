import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
        <header className="w-full py-4 " style={{ backgroundColor: "#374357" }}>
          <div className=" flex justify-center ">
            <h1 className=" text-white font-bold text-2xl animate-jump animate-once animate-normal">Contador de Calorias</h1>
          </div>
        </header>

        <div className=" md:flex md:justify-center">
          <section className="py-20 min-w-96" >
            <div className=" w-auto max-w-3xl mx-auto">
              <Form
                dispatch = {dispatch}
              />
            </div>
          </section>

          <section className=" md:py-20 ">
            <ActivityList 
              activities = {state.activities}
            />
          </section>
        </div>
    </>
  )
}

export default App
