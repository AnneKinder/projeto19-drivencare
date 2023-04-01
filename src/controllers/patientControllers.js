import patientServices from "../services/patientServices.js";

async function getMedics(req, res, next) {
const {name, specialty, location} = req.body;

  try {
   const medic =  await patientServices.getMedics({name, specialty, location})
    return res.status(201).send({medic})
    
  } catch (err) {
    next(err)
  }
}

export default {
  getMedics
};
