import medicServices from "../services/medicServices.js";

async function medicForm(req, res) {
  const {specialty, location} = req.body;
  const {id} = res.locals.user

  try {
    await medicServices.medicForm({id, specialty, location})
    return res.status(201).send("Doctor registered successfully.")

  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  medicForm,
};
