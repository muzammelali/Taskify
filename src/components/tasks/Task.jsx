import { useState } from "react";
import TaskAddModal from "./TaskAddModal";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";

export default function Task() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Became a full-stack Developer",
    description:
      "I want to became a full-stack developer and earn more money and get a high paying developer job",
    tags: ["Web", "Front-end", "Back-end"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTask] = useState([]);
  const [showAddModal, setshowAddModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTask(updatedTasks);
    }
    setshowAddModal(false);
  }
  function handleEditTask(task) {
    setTaskToEdit(task);
    setshowAddModal(true);
  }
  function handleCloseClick() {
    setshowAddModal(false);
    setTaskToEdit(null);
  }
  function handleDeleteTask(taskId) {
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTask(updatedTask);
  }
  function handleDeleteAll() {
    setTask([]);
  }

  function handleFavorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].isFavorite = !updatedTasks[taskIndex].isFavorite;
    setTask(updatedTasks);
  }

  function handleSearchClick(searchTerm) {
    const filteredTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTask([...filteredTask]);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <TaskAddModal
          addNewTask={handleAddEditTask}
          taskToEdit={taskToEdit}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container mx-auto">
        <TaskSearch onSearch={handleSearchClick} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#e4e2dd] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader
            addTask={() => setshowAddModal(true)}
            onDeleteAll={handleDeleteAll}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDetele={handleDeleteTask}
            onFav={handleFavorite}
          />
        </div>
      </div>
    </section>
  );
}
