import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Resume() {
    const [value, onChange] = useState<Value>(new Date());
   
    return (
        <div 
            className=" rounded-lg shadow-custom p-5 "
            style={{backgroundColor: "#1F2B3E"}}
        >
            <h2 className=" text-center text-white font-bold pb-3">Historial</h2>
            <Calendar onChange={onChange} value={value} className={'calendario min-w-80'} />
        </div>
    )
}
