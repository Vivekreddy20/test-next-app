import Link from "next/link"
import foodlogo from "@/public/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import Image from "next/image"
import classes from "./main-header.module.css"
export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link href="/" >
                <Image src={foodlogo} alt="biryani" width={32} height={32} priority/>
                <h3>Food.com</h3>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals">Meals</Link></li>
                    <li><Link href="/meals/share">share meals</Link></li>
                    <li><Link href="/community">community</Link></li>
                </ul>
            </nav>
        </header>
    )
}