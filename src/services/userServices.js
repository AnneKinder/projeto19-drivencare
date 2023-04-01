import bcrypt from 'bcrypt'
import userRepositories from '../repositories/userRepositories.js'
import {v4 as uuidV4} from 'uuid'
import { conflictError, invalidCredentialsError } from '../errors/index.js';

async function signUp({name, email, password, isMedic}) {

  const { rowCount } = await userRepositories.findByEmail({email})
  if(rowCount) throw conflictError("User already exists.");

  const hashPassword = await bcrypt.hash(password, 10)

  await userRepositories.signUp({name, email, password: hashPassword, isMedic})

}

async function signIn({email, password}) {

  const { rowCount, rows: [user] } = await userRepositories.findByEmail({email})
  if(!rowCount) throw invalidCredentialsError();

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if(!isPasswordValid) throw invalidCredentialsError();

  const token = uuidV4()
  await userRepositories.signIn({userId: user.id, token})

  return token


}


export default {
  signUp,
  signIn
};
