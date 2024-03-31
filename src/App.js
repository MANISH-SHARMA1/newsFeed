import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateNews from "./pages/createNews/CreateNews";
import ManageNews from "./pages/manageNews/ManageNews";
import PerformanceReports from "./pages/performanceReports/PerformanceReports";
import Navbar from "./components/navbar/Navbar";
import ViewNews from "./components/viewNews/ViewNews";
import EditNews from "./components/editNews/EditNews";

function App() {
  // 767b05107fa142acb2b2e64a6a30ae68
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createNews" element={<CreateNews />} />
        <Route path="/manageNews" element={<ManageNews />} />
        <Route path="/performanceReports" element={<PerformanceReports />} />
        <Route path="/viewNews/:newsId" element={<ViewNews />} />
        <Route path="/editNews/:newsId" element={<EditNews />} />
      </Routes>
    </div>
  );
}

export default App;
