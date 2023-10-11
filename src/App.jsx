import { Sidebar } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;
