import { shareMeal } from "../../../lib/actions";
import ImagePicker from "./image-picker";

export default function MealsShare(){
    return (
       <>
        <form action={shareMeal}>
            <input type="text" placeholder="enter your name" name="name"/>
            <input type="email" placeholder="enter your email" name="email"/>
            <input type="text" placeholder="enter title" name="title"/>
            <input type="text" placeholder="enter summary" name="summary"/>
            <textarea name="instructions" rows={10} required></textarea>
            <ImagePicker label="your image" name="image" />
      <button type="submit">share meal</button>
        </form>
        
       </>
    )
}