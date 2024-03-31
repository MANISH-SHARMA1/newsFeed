import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateNews from "./pages/createNews/CreateNews";
import ManageNews from "./pages/manageNews/ManageNews";
import PerformanceReports from "./pages/performanceReports/PerformanceReports";
import Navbar from "./components/navbar/Navbar";
import ViewNews from "./components/viewNews/ViewNews";
import EditNews from "./components/editNews/EditNews";
import NewsFeed from "./pages/newsFeed/NewsFeed";
import NewsDesc from "./components/newsDesc/NewsDesc";

function App() {
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
        <Route path="newsFeed" element={<NewsFeed />} />
        <Route path="/newsDesc/:newsId" element={<NewsDesc />} />
      </Routes>
    </div>
  );
}

export default App;
