type CalorieDisplayProps = {
    calories: number,
    text: string
}

export default function CalorieDisplay({calories, text} : CalorieDisplayProps) {
  return (
        <div className='text-center'>
            <p className={` font-black text-3xl md:text-5xl text-white`}>{calories}</p>
            <p className='text-white md:text-lg'>{text}</p>
        </div>
  )
}
