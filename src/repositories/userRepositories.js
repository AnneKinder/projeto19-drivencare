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

async function signIn({userId, token}){

    await db.query(`
        INSERT INTO sessions
        ("userId", token)
        VALUES ($1, $2)
    `, [userId, token])
}

async function findSessionByToken({token}){
    return await db.query(`
        SELECT *
        FROM sessions
        WHERE token=$1
        `, [token])
    }

async function findUserById({userId}){
    return await db.query(`
    SELECT *
    FROM users
    WHERE id=$1
    `, [userId])
}


export default{
    findByEmail,
    signUp,
    signIn,
    findSessionByToken,
    findUserById
}