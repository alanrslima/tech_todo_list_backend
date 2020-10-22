import Task from "../models/Task";

export default {
  render(task: Task) {
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      favorite: task.favorite,
      concluded: task.concluded,
    };
  },

  renderMany(tasks: Task[]) {
    return tasks.map((task) => this.render(task));
  },
};
