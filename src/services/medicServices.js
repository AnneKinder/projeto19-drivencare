import userRepositories from '../repositories/userRepositories.js'
import medicRepositories from '../repositories/medicRepositories.js';

async function medicForm({name, email, password, isMedic}) {

//   const {rowCount} = await userRepositories.findByEmail({email})
//   if(rowCount) throw new Error("User already exists.");


//   await userRepositories.medicForm({name, email, password: hashPassword, isMedic})

}

export default {
  medicForm,
};
