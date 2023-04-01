import {db} from "../config/database.js"

async function medicForm({id, specialty, location}){
    await db.query(`
    INSERT INTO medics
    ("userId", specialty, location)
    VALUES ($1, $2, $3)
`, [id, specialty, location])
}

async function getMedicByName({name}){
    return await db.query(`
        SELECT  
        medics.id AS id,
        medics."userId",
        medics.specialty,
        medics.location
        FROM medics
        JOIN users
        ON users.id=medics."userId"
        WHERE users.name=$1;
    `,[name])
 }

async function getMedicBySpecialty({specialty}){
    return await db.query(`
    SELECT * 
    FROM medics
    WHERE specialty=$1
    `, [specialty])
}

async function getMedicByLocation({location}){
    return await db.query(`
    SELECT * 
    FROM medics
    WHERE location=$1
    `, [location])
}

export default{
   medicForm,
   getMedicByName,
   getMedicBySpecialty,
   getMedicByLocation
}