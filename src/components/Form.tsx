import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories"
import { Activity } from "../types"
import { useActivity } from "../hook/useActivity";

const initialState : Activity = {
    id: uuidv4(),
    category: 0,
    name: "",
    calories: 0,
    creationDate: ""
}

export default function Form() {

    const [activity, setActivity] = useState<Activity>(initialState)

    const { state, dispatch, selectedDate } = useActivity()

    useEffect(() => {

        if(state.activeId) {

            const activitySelected = state.activities.filter( stateActivity => stateActivity.id === state.activeId )[0]
             
            setActivity(activitySelected)
            
        }
        
    }, [state.activeId, state.activities])

    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ["category", "calories"].includes(e.target.id) ? +e.target.value : e.target.value
        
        setActivity({
            ...activity, 
            [e.target.id]: isNumberField
        })
    }

    const isValidActivity = () => {
        const { category, name, calories } = activity
        return category > 0 && name.trim() !== "" && calories > 0
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const updatedActivity = {
            ...activity,
            creationDate: selectedDate // Agregar la fecha seleccionada
        };

        dispatch({ type: "save-activity", payload: {newActivity: updatedActivity}})
        setActivity({
            ...initialState,
            id: uuidv4(),
            creationDate: selectedDate
        })
    }

    return (
        
        <form 
            className=" rounded-lg shadow-custom p-5 space-y-5 min-w-72 w-auto md:min-w-96"
            style={{backgroundColor: "#1F2B3E"}}
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className=" font-bold text-white">Categoria:</label>
                <select 
                    id="category" 
                    className=" rounded-md p-2 hover:cursor-pointer form-inputs"
                    value={activity.category}
                    onChange={handleChange}
                >
                    <option value="0" disabled >Seleccione una opción</option>
                    {categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                            >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold text-white">Actividad:</label>
                <input 
                    id="name" 
                    type="text" 
                    className=" rounded-md p-2 form-inputs"
                    placeholder="Actividad. ej. Gym o Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold text-white">Calorias:</label>
                <input 
                    id="calories" 
                    type="number" 
                    className=" rounded-md p-2 form-inputs"
                    placeholder="Calorias. ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit" 
                className="font-bold bg-orange-500 text-white w-full hover:cursor-pointer  rounded-md p-2 disabled:bg-opacity-10 disabled:cursor-not-allowed"
                value={
                    activity.category === 0 ? "Guardar" :
                        activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"
                }
                disabled={!isValidActivity()}
            />
            

        </form>
    )
}
