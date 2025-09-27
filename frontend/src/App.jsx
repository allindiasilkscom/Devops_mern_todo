import React, { useEffect, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/tasks`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      // Handle both `{ tasks: [...] }` and `[...]`
      const data = res.data;
      const taskList = Array.isArray(data) ? data : data.tasks || [];
      setTasks(taskList);
    } catch (err) {
      console.error("❌ Error fetching tasks:", err);
      setTasks([]); // fallback to empty list
    }
  };

  const addTask = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(API, { text });
      setText("");
      fetchTasks();
    } catch (err) {
      console.error("❌ Error adding task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("❌ Error deleting task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List with DevOps DB Test</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id || task.id}>
              {task.text}
              <button onClick={() => deleteTask(task._id || task.id)}>❌</button>
            </li>
          ))
        ) : (
          <li>No tasks found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
