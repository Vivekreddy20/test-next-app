import slugify from "slugify";
import xss from "xss";

import fs from 'node:fs'

const sql=require("better-sqlite3");
const db=sql("meals.db");

export async function getmeals(){
    await new Promise((res)=>setTimeout(res,2000));
    // throw new error("meals ?not found");
    return db.prepare('select * from meals').all();
}


export async function getMeal(slug) {
    // simulate delay (you can remove this in production)
    await new Promise((res) => setTimeout(res, 10));
  
    const sql = require("better-sqlite3");
    const db = sql("meals.db");
  
    return db.prepare("select * from meals where slug = ?").get(slug);
  }
  

export async function saveMeal(meal){
    meal.slug=slugify(meal.title,{lower:true});
    meal.instructions=xss(meal.instructions);

    const extention=meal.image.name.split('.').pop();
    const filename=`${meal.slug}.${extention}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage),(error)=>{
        if(error){
            throw new Error("saving image failde");
        }
    });

    meal.image=`/images/${filename}`;

    db.prepare(`
         insert into meals (title,summary,instructions,creator,creator_email,image,slug) 
         values(
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
         )
        `).run(meal)
}