import { createContext, useReducer, Dispatch, ReactNode, useState, useMemo } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";
import { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    selectedDate: string
    setSelectedDate: Dispatch<React.SetStateAction<string>>
    handleDateChange: (date: Date) => void
    caloriesConsumed: number
    caloriesBurned: number
    caloriesDif: number
    categoryName: (category: Activity["category"]) => string[]
    isEmptyActivities: (date: Activity["creationDate"]) => boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    // Calendario
    const handleDateChange = (date: Date) => {
        setSelectedDate(getFormattedDate(date))
    }

    const getFormattedDate = (value? : Date) => {
        let now = new Date();
    
        if(value) {
            now = value
        }
    
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
        
    };
    const [selectedDate, setSelectedDate] = useState<string>( getFormattedDate() );

    // Contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => 
        activity.category === 1 && activity.creationDate === selectedDate ? total + activity.calories : total , 0), 
    [state.activities, selectedDate]);

    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => 
        activity.category === 2 && activity.creationDate === selectedDate ? total + activity.calories : total , 0), 
    [state.activities, selectedDate]);

    const caloriesDif = useMemo(() => caloriesConsumed - caloriesBurned , [caloriesConsumed, caloriesBurned]);

    // Activity List
    const categoryName = useMemo(() => ( category : Activity["category"] ) => categories.map( cat => cat.id === category ? cat.name : "" ), [])

    const isEmptyActivities = useMemo(() => (date: Activity["creationDate"]) => state.activities.some(fecha => fecha.creationDate === date), [state.activities]);

    // Resume
    
    
    return (
        <ActivityContext.Provider value={{
            state, 
            dispatch,
            selectedDate,
            setSelectedDate,
            handleDateChange,
            caloriesConsumed,
            caloriesBurned,
            caloriesDif,
            categoryName,
            isEmptyActivities
        }}>
            {children}
        </ActivityContext.Provider>
    )
}