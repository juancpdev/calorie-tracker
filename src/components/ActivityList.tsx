/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activity-reducer"

type ActivityStateProp = {
    activities : Activity[],
    dispatch : Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch } : ActivityStateProp) {

    const categoryName = useMemo(() => ( category : Activity["category"] ) => categories.map( cat => cat.id === category ? cat.name : "" ), [activities])

    const isEmptyActivities = useMemo(() => (activities.length === 0), [activities])

    return (
        <>
            <div
                className=" rounded-lg shadow-custom p-7 mx-6 space-y-11 activity"
                style={{backgroundColor: "#1F2B3E"}}
            >
                <h2 className=" text-2xl md:text-3xl font-bold text-white text-center">Comidas y Actividades</h2>
            
                    {isEmptyActivities ?
                        <p className="text-white text-center">No hay datos en la fecha seleccionada</p> : 
                        <div className="grid gap-10 sm:grid-cols-2  lg:grid-cols-3 actividades">
                            {activities.map( activity => (
                            
                                <div key={activity.id} className=" px-5 py-5  flex justify-between gap-1 bg-custom-gradient w-full rounded-md mx-auto relative">
                                    <div className=" text-xl font-bold relative">
                                        <p className={` absolute -top-8 -left-8 px-8 py-2 uppercase text-sm text-white text-neon shadow-md rounded-md ${activity.category === 1 ?  ' shadow-comida ' : 'shadow-ejercicio' }` }> 
                                            {categoryName(activity.category)}
                                        </p>
                                        <p className=" mt-5 text-white "> {activity.name}</p>
                                        <p className={`text-2xl font-black ${activity.category === 1 ? 'text-red-600 text-neon ' : 'text-lime-500 text-neon' }`}>
                                            {activity.category === 1 ? "+" :  "-"}
                                                {activity.calories} {" "} Calorias
                                        </p>
                                    </div>

                                    <div className="flex gap-3 items-center absolute top-2 right-2">
                                        <button 
                                           onClick={() => dispatch({ type:"set-activeId", payload: {id: activity.id}})}
                                        >
                                            <PencilSquareIcon
                                                className="h-6 w-6 text-white sombra-edit"
                                            />
                                        </button>

                                        <button 
                                           onClick={() => dispatch({ type:"delete-activity", payload: {id: activity.id}})}
                                        >
                                            <TrashIcon
                                                className="h-6 w-6 text-white sombra-delete"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    }
                
            </div>

        </>
    )
}