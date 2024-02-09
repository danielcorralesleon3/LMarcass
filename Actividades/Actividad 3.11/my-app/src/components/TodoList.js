import React from "react";
import TodoItem from "./TodoItem";
import{Button} from "react-bootstrap";
function TodoList() {
    const [tasks, setTasks] = React.useState(["tasca 1", "tasca 2"]);
    function addTask() {
        setTasks(currentTasks => [...currentTasks,"Nueva tarea"])
    }
    return (
        <div>
            <h2>Mi lista</h2>
            <ul>
                {tasks.map((task, index) => (
                    print("Escribe la tarea")
                    <TodoItem key={index} content={task} />
                ))}
            </ul>
            <Button variant="success" onClick={() =>addTask("Nueva tarea")}>Añadir tarea</Button>
        </div>
    )
}
export default TodoList;