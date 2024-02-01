import {useState, useEffect} from "react";
import '../../components/TaskForm/TaskForm.scss';
import TaskList from "../TaskList/TaskList";





function Taskform() {

    const [task, setTask] = useState ([]);
    const [inputVal, setInputVal] = useState("");

    function writeTask(e) {
        setInputVal(e.target.value)
        console.log(inputVal)
    }

    function addTask() {
        if (inputVal.trim() !== "") { 
            setTask((oldTask) => [...oldTask, inputVal]);
            setInputVal(""); 
        }
    }


    // changes for sending the current list supposedly
    // function addTask() {
    //     setTasks((oldTasks) => [...oldTasks, { id: Date.now(), text: inputVal }]);
    //     sendTasks(tasks);
    //     setInputVal("");
    // }

    // function sendTasks(tasks) {
    //     // Send the tasks to another function or component here
    //     sendTasksToAnotherComponent(tasks);
    // }



    function delTask (taskIndex) {
        setTask((oldTask)=> 
            oldTask.filter((oldIndTask, oldIndTaskIndex ) =>{
                return oldIndTaskIndex != taskIndex;
            })
        );
        }




    return (
        <>
        <section className="TaskForm">
            <h1 className="TaskForm__title">Code Task List</h1>
            <div className="form">
                <input className="form__input" type="text" placeholder="Write Task.." onChange={writeTask}></input>
                <button onClick={addTask} className="btn form__btn">Add Task</button>
            </div>

            <div className="container">
               
                {
                    task.map((indTask, index) => {(
                            <div className="task" key={indTask.id}>
                                <p className="task__text">{indTask}</p>
                                <input className="task__checkBox" type="checkbox"></input>
                                <div className="task__action">
                                    
                                    <button onClick={() => delTask(index)} className="btn task__btn">Delete</button>
                                </div>
                                {/* <button onClick={() => sendTasks(tasks)} className="btn form__btn">Send Tasks</button> */}
                            </div>
                   
                        );
                    })
                }
            
            </div>
        </section>
        </>

    )
}
export default Taskform;