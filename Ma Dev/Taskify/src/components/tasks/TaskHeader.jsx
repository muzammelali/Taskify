export default function TaskHeader({ addTask, onDeleteAll }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-[#FFD166] text-black px-3.5 py-2.5 text-sm font-semibold"
          onClick={addTask}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-[#db4a2b] text-white px-3.5 py-2.5 text-sm font-semibold"
          onClick={onDeleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
