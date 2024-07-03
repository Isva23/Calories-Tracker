import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps  = {
    activities : Activity[]
}
export default function CalorieTracker({activities}:CalorieTrackerProps) {
    //contadores
    const caloriesCosumed = useMemo( ()=> activities.reduce((total,activity) => activity.category === 1 ? 
    total + activity.calories : total,0), [activities])
    
    const caloriesBourned = useMemo( ()=> activities.reduce((total,activity) => activity.category === 2 ? 
    total + activity.calories : total,0), [activities])

    const netCalories = useMemo( () => caloriesCosumed - caloriesBourned , [activities] )

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay
                calories={caloriesCosumed}
                text = 'Cosumidas'
            />
            
            <CalorieDisplay
                calories={caloriesBourned}
                text = 'Quemadas'
            />

            <CalorieDisplay
                calories={netCalories}
                text = 'Diferencia'
            />
        </div>

    </>
  )
}
