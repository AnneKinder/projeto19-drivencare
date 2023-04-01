import { Router } from "express";
import medicControllers from "../controllers/medicControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import {medicSchema} from "../schemas/medicSchema.js" ;
import patientControllers from "../controllers/patientControllers.js";

const medicRoutes = Router();

medicRoutes.post("/medic-form", authMiddleware.authValidation,validateSchema(medicSchema), medicControllers.medicForm);
medicRoutes.get("/search", authMiddleware.authValidation, patientControllers.getMedics);

export default medicRoutes;
