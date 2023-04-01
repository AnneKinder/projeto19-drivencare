import patientServices from "../services/patientServices.js";

async function getMedics(req, res) {
const {name, specialty, location} = req.body;

  try {

   const medic =  await patientServices.getMedics({name, specialty, location})
    return res.status(201).send({medic})
    
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  getMedics
};
