import express from "express";
import { Router } from "express";
import { isAuthenticated, restrict } from "../middlewars/Auth.middlewares.js";

import { 
    updateDoctor,
    getAllDoctors,
    getSingleDoctor,
    deleteDoctor
} from "../controllers/doctor.controller.js";

// Nested Router
import reviewRouter from "./review.route.js"

const router = Router();

// nested router
router.use('/:doctorId/reviews', reviewRouter);

router.route("/getSingleDoctor/:id").get( getSingleDoctor)
router.route("/getAllDoctors").get(getAllDoctors)
router.route("/updateDoctor/:id").put(isAuthenticated, restrict(['doctor']),updateDoctor)
router.route("/deleteDoctor/:id").delete(isAuthenticated, restrict(['patient']),deleteDoctor)

export default router;