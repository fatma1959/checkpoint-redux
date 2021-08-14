import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterTask from "./Components/FilterTask/FilterTask";

function App() {
  return (
    <div className="App">
      <h1>Application Todo</h1>
      <AddTask />
      <TaskList />
      <FilterTask />
    </div>
  );
}

export default App;
