import { error } from "console";

const sql=require("better-sqlite3");
const db=sql("meals.db");

export async function getmeals(){
    await new Promise((res)=>setTimeout(res,2000));
    // throw new error("meals ?not found");
    return db.prepare('select * from meals').all();
}