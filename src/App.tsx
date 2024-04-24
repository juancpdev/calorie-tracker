/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import Resume from "./components/Resume"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])
  
  return (
    <>
        <header className="w-full py-4 " style={{ backgroundColor: "#374357" }}>
          <div className=" flex justify-between items-center px-5 md:px-10">
            <h1 className=" text-white font-bold text-xl md:text-2xl animate-jump animate-once animate-normal">Contador de Calorias</h1>
            <button 
              className="bg-slate-400 rounded-md p-2 font-bold text-white cursor-pointer disabled:opacity-50 disabled:cursor-default"
              disabled={!canRestartApp()}
              onClick={() => dispatch({ type: "restart-app"})}
            >
              Reset App
            </button>
          </div>
        </header>

        <div className=" xl:flex md:justify-center ">
          <div className=" md:flex justify-center items-center md:gap-5 xl:block xl:pl-12">

            <section className="pt-10 flex justify-center mx-5 md:py-10 md:max-w-md md:ml-5 md:mr-0 xl:pb-0 xl:m-0 " >
                <Resume 
                  dispatch = {dispatch}
                />
            </section>
            
            <section className="py-10 mx-5 md:mr-5 md:ml-0 xl:m-0 xl:pb-0" >
   
                <Form
                  dispatch = {dispatch}
                  state = {state}
                />

            </section>
            
          </div>
          
          <div className=" w-full">
            <section className=" w-full pt-10 md:px-5 xl:pb-8">
              <CalorieTracker 
                activities={state.activities}
              />
            </section>

            <section className=" w-full py-10 md:px-5 xl:pb-8 xl:pt-0">
              <ActivityList 
                activities = {state.activities}
                dispatch = {dispatch}
              />
            </section>
          </div>

        </div>
    </>
  )
}

export default App
