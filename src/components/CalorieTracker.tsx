/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { Activity } from '../types'
import CalorieDisplay from './CalorieDisplay'

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps)  {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total , 0 ), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total , 0 ), [activities])
    const caloriesDif = useMemo(() => caloriesConsumed - caloriesBurned , [activities])

    return (
        <>
            <div
                className=" rounded-lg shadow-custom p-7 mx-6 space-y-5 activity"
                style={{backgroundColor: "#1F2B3E"}}
            >
                <h2 className='text-white font-bold text-center text-2xl md:text-3xl'>Resumen de Calorias</h2>
                <div className='w-full flex justify-between md:px-28'>
                    <CalorieDisplay 
                        calories={caloriesConsumed}
                        text={"Consumidas"}
                    />
                    <CalorieDisplay 
                        calories={caloriesBurned}
                        text={"Ejercicio"}
                    />
                    <CalorieDisplay 
                        calories={caloriesDif}
                        text={"Diferencia"}
                    />
                </div>
            </div>
        </>
    )
}
