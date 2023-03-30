import { Router } from "express";
import userController from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post("/signup", userController.signup);

export default userRoutes;
