import './App.scss';
import HeroSection from './component/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import Taskform from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Taskform/>
      <TaskList/>
    </>
  );
}

export default App;
