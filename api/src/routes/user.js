import { Router } from "express";
import User from "../models/User";
const router = Router();

// Returns all the users
router.get("/", async (req, res) => {
  try {
    const USERS = await User.find();
    return res.status(200).send(USERS);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});
//
// Returns the name of 1 user
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const USER = await User.findOne({ name });
    if (!USER) throw "No user found with that name";

    return res.status(200).send(USER);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

// Creates an user
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const USER = await User.create({ name });
    return res
      .status(200)
      .send({ message: "User has been created", data: USER });
  } catch (err) {
    console.error(err);
    return res.status(400).send(err);
  }
});

export default router;
