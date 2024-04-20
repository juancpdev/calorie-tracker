import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"

type ActivityStateProp = {
    activities : Activity[]
}

export default function ActivityList({ activities } : ActivityStateProp) {

    const categoryName = useMemo(() => ( category : Activity["category"] ) => categories.map( cat => cat.id === category ? cat.name : "" ), [])

    return (
        <>
            <div
                className=" rounded-lg shadow-custom p-7 mx-6 space-y-5"
                style={{backgroundColor: "#1F2B3E"}}
            >
                <h2 className=" text-3xl font-bold text-white text-center">Comidas y Actividades</h2>
                
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {activities.map( activity => (
                        <div key={activity.id} className=" px-5 py-10 mt-10 flex justify-between bg-custom-gradient w-full rounded-md mx-auto">
                            <div className=" text-xl font-bold relative">
                                <p className={` absolute -top-8 -left-8 px-8 py-2 uppercase text-sm text-white text-neon shadow-md rounded-md ${activity.category === 1 ?  'bg-red-600 ' : 'bg-lime-500' }` }> 
                                    {categoryName(activity.category)}
                                </p>
                                <p className=" mt-5 text-white"> {activity.name}</p>
                                <p className={`text-4xl font-black ${activity.category === 1 ? 'text-red-600 text-neon ' : 'text-lime-500 text-neon' }`}>
                                    {activity.category === 1 ? "+" :  "-"}
                                        {activity.calories} {" "} Calorias
                                </p>
                            </div>
                            <div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}