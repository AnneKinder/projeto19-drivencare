import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { signUpSchema, signInSchema } from "../schemas/userSchema.js";

const userRoutes = Router();

userRoutes.post("/signup", validateSchema(signUpSchema), userControllers.signUp);
userRoutes.post("/signin", validateSchema(signInSchema), userControllers.signIn);


export default userRoutes;
