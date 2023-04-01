import userServices from "../services/userServices.js";

async function signUp(req, res, next) {
  const {name, email, password, isMedic} = req.body;

  try {
    await userServices.signUp({name, email, password, isMedic})
    return res.sendStatus(201);

  } catch (err) {
    next(err)
  }
}

async function signIn(req, res, next) {
  const {email, password} = req.body;

  try {
    const token = await userServices.signIn({email, password})
    return res.status(201).send({token});

  } catch (err) {
    next(err)
  }
}

export default {
  signUp,
  signIn
};
