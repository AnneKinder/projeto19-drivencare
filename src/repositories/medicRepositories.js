import {db} from "../config/database.js"

async function medicForm({id, specialty, location}){
    await db.query(`
    INSERT INTO medics
    ("userId", specialty, location)
    VALUES ($1, $2, $3)
`, [id, specialty, location])
}

export default{
   medicForm,
}