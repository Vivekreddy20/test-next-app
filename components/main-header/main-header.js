"use client";

import Link from "next/link"
import foodlogo from "@/public/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import Image from "next/image"
import classes from "./main-header.module.css"
import { usePathname } from "next/navigation"
export default function MainHeader(){
    let path = usePathname();
    console.log(path);
    
    return(

        <header className={classes.header}>
            <Link href="/" >
                <Image src={foodlogo} alt="biryani" width={32} height={32} priority/>
                <h3>Food.com</h3>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals" className={path.startsWith("/meals")?classes.cactive:""}>Meals</Link></li>
                    <li><Link href="/typingSpeed">typing speed</Link></li>
                    <li><Link href="/community" className={path.startsWith("/community")?classes.cactive:""}>community</Link></li>
                </ul>
            </nav>
        </header>
    )
}