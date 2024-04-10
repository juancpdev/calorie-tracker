import { categories } from "../data/categories"

export default function Form() {
  return (
    <form 
    className=" bg-slate-700 rounded-lg shadow p-7 mx-4 space-y-5"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className=" font-bold text-white">Categoria:</label>
            <select 
                defaultValue="" 
                id="category" 
                className="border border-slate-500 rounded-md p-2 hover:cursor-pointer"
            >
                <option value="" disabled >Seleccione una opción</option>
                {categories.map(category => (
                    <option 
                        key={category.id}
                        value="{category.id}"
                        >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Actividad:</label>
            <input 
                id="activity" 
                type="text" 
                className="border border-slate-500 rounded-md p-2"
                placeholder="Actividad. ej. Gym o Bicicleta"
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input 
                id="activity" 
                type="number" 
                className="border border-slate-500 rounded-md p-2"
                placeholder="Calorias. ej. 300 o 500"
            />
        </div>

        <input 
            type="button" 
            className=" bg-slate-500 text-white w-full hover:cursor-pointer border border-slate-500 rounded-md p-2"
            value="Guardar"
        />
        

    </form>
  )
}
