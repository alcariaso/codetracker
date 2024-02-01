import './App.scss';
import HeroSection from './component/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <TaskList/>
    </>
  );
}

export default App;
