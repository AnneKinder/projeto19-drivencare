import { Router } from "express";
import medicControllers from "../controllers/medicControllers.js";

const medicRoutes = Router();

medicRoutes.post("/medic-form", medicControllers.medicForm);

export default medicRoutes;
