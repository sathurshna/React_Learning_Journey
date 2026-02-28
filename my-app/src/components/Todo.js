import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;   // prevent empty tasks
    setTasks([...tasks, task]);       // add new task
    setTask("");                      // clear input
  };

  return (
    <div>
      
      <h2>Todo Component</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}
          <button>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;