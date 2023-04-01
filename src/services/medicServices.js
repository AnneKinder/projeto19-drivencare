import userRepositories from '../repositories/userRepositories.js'
import medicRepositories from '../repositories/medicRepositories.js';
import { duplicatedEmailError } from '../errors/index.js';

async function medicForm({id, specialty, location}) {

  const {rowCount} = await userRepositories.findUserById({id})
  if(rowCount) throw duplicatedEmailError("Medic already registered.");

  await medicRepositories.medicForm({id, specialty, location})

}

export default {
  medicForm,
};
