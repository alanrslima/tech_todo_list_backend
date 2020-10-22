import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Task from "../models/Task";
import taskView from "../views/tasks_view";
import * as Yup from "yup";

export default {
  async index(req: Request, res: Response) {
    const tasksRepository = getRepository(Task);
    const tasks = await tasksRepository.find();
    return res.json(taskView.renderMany(tasks));
  },
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const tasksRepository = getRepository(Task);
    const data = { name, description, favorite: false, concluded: false };
    const schema = Yup.object().shape({
      name: Yup.string().required().max(300),
      description: Yup.string().required(),
    });

    await schema.validate(data, { abortEarly: false });
    const task = tasksRepository.create(data);
    await tasksRepository.save(task);
    return res.status(201).json(task);
  },
};
