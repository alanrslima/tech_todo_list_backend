import { Router } from "express";
import TasksController from "./controllers/TasksController";

const routes = Router();

routes.get("/tasks", TasksController.index);
routes.post("/tasks", TasksController.create);
routes.delete("/tasks/:id", TasksController.delete);
routes.put("/tasks", TasksController.edit);
// routes.get("/orphanages/:id", TasksController.show);
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
