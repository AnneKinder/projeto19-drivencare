import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post("/signup", userControllers.signUp);

export default userRoutes;
