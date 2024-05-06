import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';


type ResumeProps = {
    onDateChange: (date: Date) => void;
};

export default function Resume({ onDateChange }: ResumeProps) {
    const [value, setValue] = useState(new Date());

    const handleChange = (value: Date) => {
        setValue(value);
        onDateChange(value); 
    };

    return (
        <div className="rounded-lg shadow-custom p-5" style={{ backgroundColor: "#1F2B3E" }}>
            <h2 className="text-center text-white font-bold pb-3">Historial</h2>
            <Calendar
                onClickDay={handleChange}
                value={value}
                className={'calendario min-w-80'}
            />
        </div>
    );
}
