import { useEffect, useState } from "react"
import MealsItem from "./MealsItem"

export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3000/meals')

            if (!response.ok) {

            }

            const meals = await response.json()
            setLoadedMeals(meals)
        }
        fetchMeals()
    }, [])


    return <ul id="meals">
        {loadedMeals.map((meal)=>(
            <MealsItem 
            key={meal.id} 
            meal={meal} 
            />))}
    </ul>
}