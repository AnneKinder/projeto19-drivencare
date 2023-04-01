import userRepositories from '../repositories/userRepositories.js'
import medicRepositories from '../repositories/medicRepositories.js';

async function getMedics({name, specialty, location}) {

    if(name!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicByName({name})
        if(!rowCount) throw new Error("Medic not found");

        return medic
    }

    if(specialty!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicBySpecialty({specialty})
        if(!rowCount) throw new Error("Medic not found");

        return medic
    }

    if(location!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicByLocation({location})
        if(!rowCount) throw new Error("Medic not found");

        return medic
    }


}



export default {
    getMedics,
};
