import {db} from "../config/database.js"

async function findByEmail({email}){
    return await db.query(`
    SELECT *
    FROM users
    WHERE email=$1
    `, [email])
}

async function signUp({name, email, password, isMedic}){
    await db.query(`
        INSERT INTO users
        (name, email, password, "isMedic")
        VALUES ($1, $2, $3, $4)
    `, [name, email, password, isMedic])
}

export default{
    findByEmail,
    signUp
}