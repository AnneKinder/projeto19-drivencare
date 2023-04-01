import userRepositories from '../repositories/userRepositories.js'
import medicRepositories from '../repositories/medicRepositories.js';
import { notFoundError } from '../errors/index.js';

async function getMedics({name, specialty, location}) {

    if(name!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicByName({name})
        if(!rowCount) throw notFoundError();

        return medic
    }

    if(specialty!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicBySpecialty({specialty})
        if(!rowCount) throw notFoundError();

        return medic
    }

    if(location!==""){
        const {rowCount, rows: [medic]} = await medicRepositories.getMedicByLocation({location})
        if(!rowCount) throw notFoundError();

        return medic
    }


}



export default {
    getMedics,
};
