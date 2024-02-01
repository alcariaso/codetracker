import { useState, useEffect } from "react";
import axios from 'axios';
import './TaskList.scss';

export default function TaskList() {
    const { REACT_APP_API_BASE_PATH } = process.env
    const [tasks, setTasks] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_API_BASE_PATH}/tasks`)
            setTasks(response.data.tasks) // Update the tasks state with the fetched data
        } catch (error) {
            console.error(error.message)
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    }
    return (
        <>
            <p className="task-list">To Do List</p>
            <div className="task-list__container">
                {tasks.map((task) => (
                    <p key={task.id}>
                        <input 
                            type="checkbox" 
                            name ="completedTask" 
                            id="completedTask" 
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                            />
                    {task.task}
                    </p>
                ))}
            </div>
        </>
    );
}
