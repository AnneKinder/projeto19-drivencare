import bcrypt, { hash } from 'bcrypt'
import userRepositories from '../repositories/userRepositories.js'

async function signUp({name, email, password, isMedic}) {

  const {rowCount} = await userRepositories.findByEmail({email})
  if(rowCount) throw new Error("User already exists.");

  const hashPassword = await bcrypt.hash(password, 10)

  await userRepositories.signUp({name, email, password: hashPassword, isMedic})

}

async function signIn({email, password}) {

  const {rowCount} = await userRepositories.findByEmail({email})
  if(!rowCount) throw new Error("User not found.");


}


export default {
  signUp,
  signIn
};
