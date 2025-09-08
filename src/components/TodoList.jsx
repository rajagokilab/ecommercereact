import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleTask, deleteTask, updateTask }) {
  if (!tasks.length) return <p>No tasks yet. Add some! 🚀</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}
