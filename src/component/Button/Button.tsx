// TaskCheckbox.tsx
import React from "react";
import { useAtom } from "jotai";
import { tasksAtom, type Task } from "../Atom/TodoAtom";
import { Checkbox } from "./ButtonStyle";

interface TaskProps {
  task: Task;
}

const TaskCheckbox: React.FC<TaskProps> = ({ task }) => {
  const [tasks, setTasks] = useAtom<Task[]>(tasksAtom);

  const toggleTaskDone = (taskId: number) => {
    const updated = tasks.map((t) =>
      t.id === taskId ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  return (
    <Checkbox onClick={() => toggleTaskDone(task.id)}>
      {task.done ? "✅" : ""}
    </Checkbox>
  );
};

export default TaskCheckbox;
