import medicServices from "../services/medicServices.js";

async function medicForm(req, res, next) {
  const {specialty, location} = req.body;
  const {id} = res.locals.user

  try {
    await medicServices.medicForm({id, specialty, location})
    return res.status(201).send("Doctor registered successfully.")

  } catch (err) {
    next(err)
  }
}

export default {
  medicForm,
};
