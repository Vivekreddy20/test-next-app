import Image from "next/image"
import Link from "next/link"

export default function MealItem({title,slug,image,summary,creator}){ 
    
    return (
        <article>
            <header>
                <Image src={image} alt={title} width={32} height={32} priority/>
                <div>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div>
                <p>{summary}</p>
                <Link href={`/meals/${slug}`}>view details</Link>
            </div>
        </article>
    )
}