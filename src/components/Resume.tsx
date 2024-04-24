import { useState, Dispatch } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { ActivityActions } from "../reducers/activity-reducer";

type ValuePiece = Date | [Date, Date];

type Value = ValuePiece | [ValuePiece, ValuePiece];

type ResumeStateProp = {
    dispatch : Dispatch<ActivityActions>
}

export default function Resume({dispatch} : ResumeStateProp) {
    const [value, onChange] = useState<Value>(new Date());
    
    const handleChange = (value: Date | Date[]) => {
        // Si deseas trabajar con un solo valor seleccionado, como parece ser el caso,
        // puedes asumir que `value` es de tipo Date y acceder directamente a él.
        const selectedDate = value as Date;
        const year = selectedDate.getFullYear();
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        const day = selectedDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        dispatch({ type: "set-date", payload: { date: formattedDate } });
    };
    
   
    return (
        <div 
            className=" rounded-lg shadow-custom p-5 "
            style={{backgroundColor: "#1F2B3E"}}
        >
            <h2 className=" text-center text-white font-bold pb-3">Historial</h2>
            <Calendar 
                onChange={handleChange} 
                value={value} 
                className={'calendario min-w-80'} 
                
            />
        </div>
    )
}
