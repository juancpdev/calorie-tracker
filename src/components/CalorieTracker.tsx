import CalorieDisplay from './CalorieDisplay'
import { useActivity } from '../hook/useActivity'


export default function CalorieTracker()  {

    const { caloriesBurned, caloriesConsumed, caloriesDif } = useActivity()

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
