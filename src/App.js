import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./component/HeroSection/HeroSection";
import { TaskList } from "./components/TaskList/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/tasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const toggleTaskCompletion = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };
  return (
    <>
      <NavBar />
      <HeroSection />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
