
import './TaskList.scss';

export const TaskList = (tasks, setTasks) => {
    console.log('tasks:', tasks);
   
    return (
        <div className="task-list">
            <p className="task-list__title">CODE TRACKER LIST</p>
            <div className="task-list__container">
                {tasks.tasks.map((task) => (
                    <p key={task.id}>
                        <input 
                            type="checkbox" 
                            name ="completedTask" 
                            id="completedTask" 
                            checked={task.completed}
                            //onChange={() => toggleTaskCompletion(task.id)}
                            />
                    {task.task}
                    </p>
                ))}
            </div>
        </div>
    );
}
