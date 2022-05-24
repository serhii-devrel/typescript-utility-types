interface Task {
  id: number;
  description: string;
}

function addTask(tasks: Task[], task: Task): Task[] {
  return tasks.concat(task);
}

type AddTaskResult = ReturnType<typeof addTask>;
