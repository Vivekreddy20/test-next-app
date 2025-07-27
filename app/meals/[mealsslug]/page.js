import { getMeal } from "../../../lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Slug({ params }) {
  console.log("Slug param:", params.mealsslug); 

  const meal = await getMeal(params.mealsslug); 

  if (!meal) return notFound();

  const formattedInstructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <Image src={meal.image} alt={meal.title} width={360} height={360} />
      <h1>{meal.title}</h1>
      <h2>{meal.summary}</h2>
      <p dangerouslySetInnerHTML={{ __html: formattedInstructions }} />
    </>
  );
}
