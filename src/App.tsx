import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import Resume from "./components/Resume"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
        <header className="w-full py-4 " style={{ backgroundColor: "#374357" }}>
          <div className=" flex justify-center ">
            <h1 className=" text-white font-bold text-2xl animate-jump animate-once animate-normal">Contador de Calorias</h1>
          </div>
        </header>

        <div className=" xl:flex md:justify-center ">
          <div className=" md:flex justify-center items-center md:gap-5 xl:block xl:pl-12">

            <section className="pt-10 flex justify-center mx-5 md:py-10 md:max-w-md md:ml-5 md:mr-0 xl:pb-0 xl:m-0 " >
                <Resume/>
            </section>
            
            <section className="py-10 mx-5 md:mr-5 md:ml-0 xl:m-0" >
   
                <Form
                  dispatch = {dispatch}
                />

            </section>
            
          </div>
          

          <section className=" w-full py-10 md:px-5">
            <ActivityList 
              activities = {state.activities}
            />
          </section>
        </div>
    </>
  )
}

export default App
