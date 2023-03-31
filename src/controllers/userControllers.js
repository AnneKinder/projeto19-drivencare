import userServices from "../services/userServices.js";

async function signUp(req, res) {
  const {name, email, password, isMedic} = req.body;

  try {
    await userServices.signUp({name, email, password, isMedic})
    return res.sendStatus(201);

  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function signIn(req, res) {
  const {email, password} = req.body;

  try {
    const token = await userServices.signIn({email, password})
    return res.status(201).send({token});

  } catch (err) {
    return res.status(500).send(err.message);
  }
}


export default {
  signUp,
  signIn
};
