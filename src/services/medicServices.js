import userRepositories from '../repositories/userRepositories.js'
import medicRepositories from '../repositories/medicRepositories.js';

async function medicForm({id, specialty, location}) {

  const {rowCount} = await userRepositories.findUserById({id})
  if(rowCount) throw new Error("Medic already registered.");

  await medicRepositories.medicForm({id, specialty, location})

}

export default {
  medicForm,
};
