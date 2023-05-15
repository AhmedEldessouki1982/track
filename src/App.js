import Layout from "./layout/Layout";
import TaskItem from "./components/TaskItem";
import "rsuite/dist/rsuite.css";
import Searching from "./components/Searching";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="app mt-3">
      <Layout >
        <Searching/>
        <div className="flex h-3/6 items-center mt-5 gap-5 flex-col overflow-scroll">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>

        <ControlPanel/>

      </Layout>
    </div>
  );
}

export default App;
