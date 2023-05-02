import React, { useEffect, useState } from "react";
import {
  addNewTask,
  getTasks,
  removeTask,
  updateTask,
} from "../firebase/taskController";

/* const task = {
  title: "This is the title",
  description: "This is the description",
}; */

const TaskList = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [tasks, setTasks] = useState([]);

  const [editMode, setEditMode] = useState("off");

  useEffect(() => {
    initializeTasks();
  }, []);

  const createNewTask = async () => {
    // console.log(`[ TASKLIST ] Create new task: `, task);
    await addNewTask(task);
    setTask({ title: "", description: "" });
    initializeTasks();
    setEditMode("off");
  };

  const initializeTasks = () => {
    getTasks()
      .then((t) => setTasks([...t]))
      .catch((error) => {
        console.error("[ TASKLIST getTasks ] Error: ", error);
        console.error("[ TASKLIST getTasks ] Error message: ", error.message);
      });
  };

  const editTask = (id) => {
    setEditMode("on");
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ ...taskToEdit });
  };

  const updateTaskItem = async () => {
    await updateTask(task);
    setTask({ title: "", description: "" });
    initializeTasks();
    setEditMode("off");
  };

  const removeTaskId = async (id) => {
    await removeTask(id);
    initializeTasks();
  };

  return (
    <div>
      <h1 className="mb-2 text-amber-400 font-semibold text-lg text-center">
        TaskList
      </h1>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <h2>New Task</h2>
        <input
          type="text"
          value={task.title}
          placeholder="Title"
          className="w-full px-2 py-1 border-none shadow-md rounded focus:ring-2 focus:ring-amber-400"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          type="text"
          rows={3}
          value={task.description}
          placeholder="Description"
          className="w-full px-2 py-1 border-none shadow-md rounded focus:ring-2 focus:ring-amber-400"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />

        <button
          className="py-2 px-4 rounded shadow bg-amber-300 text-white font-semibold hover:bg-amber-500 transition"
          onClick={() =>
            editMode === "off" ? createNewTask() : updateTaskItem()
          }
        >
          {editMode === "off" ? "ADD" : "EDIT"}
        </button>

        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {tasks.length > 0 &&
            tasks.map((task) => (
              <div
                key={task.id}
                className="w-10/12 mx-auto mb-2 p-4 flex flex-col gap-2 rounded-lg border-2 border-amber-200 shadow-md"
              >
                <h1 className="font-semibold">{task.title}</h1>
                <hr className="border-2 border-amber-200 rounded"></hr>
                <p>{task.description}</p>
                <div className="flex justify-between">
                  <button
                    className="px-1 py-2 bg-amber-300 rounded text-white font-semibold cursor-pointer hover:bg-amber-600"
                    onClick={() => editTask(task.id)}
                  >
                    EDIT
                  </button>
                  <button
                    className="px-1 py-2 bg-red-500 rounded text-white font-semibold cursor-pointer hover:bg-red-700"
                    onClick={() =>
                      window.confirm("Are you sure to delete this task?") &&
                      removeTaskId(task.id)
                    }
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
