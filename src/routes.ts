import { Router } from "express";
import TasksController from "./controllers/TasksController";

const routes = Router();

routes.get("/tasks", TasksController.index);
routes.post("/tasks", TasksController.create);
// routes.get("/orphanages/:id", TasksController.show);
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
