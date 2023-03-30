async function signup(req, res) {
  try {
    res.status(201).send("Calling controller");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  signup,
};
