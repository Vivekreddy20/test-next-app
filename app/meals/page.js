import Link from "next/link"
import MealsGrid from "../../components/meals/meals-grid"
import {getmeals} from "@/lib/meals.js"
import { Suspense } from "react";

async function Mealsfetch(){
    let fmeals=await getmeals();
    return <MealsGrid meals={fmeals}/>
}

export default async function Meals(){
   
    
    return (
        <>
            <header>
                <h1>Delicious meals created by you</h1>
                <p>choose your favorite recipe and cook it yourself</p>
                <Link href="/meals/share">share your fav recipe</Link>
            </header>
            <main>
                <Suspense fallback={<p>Loading data......</p>}>
                    <Mealsfetch/>
                </Suspense>
                    
            </main>
        </>
       
    )
}