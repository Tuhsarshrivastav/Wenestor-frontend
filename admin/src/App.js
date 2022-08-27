import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import ConsultantsDashboard from "./components/Dashboard/ConsultantsDashboard";
import BusinessesDashboard from "./components/Dashboard/BusinessesDashboard";
import BlogsDashboard from "./components/Dashboard/blogsDashboard/BlogsDashboard";
import TrendingProjects from "./components/Dashboard/TrendingProjectDashboard/TrendingProject";

import SkillsDashboard from "./components/Dashboard/SkillsDashboard/SkillsDashboard";
import Protected from "./components/Protected";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="dashboard/consultants"
        element={<Protected Component={ConsultantsDashboard} />}
      />
      <Route
        path="dashboard/businesses"
        element={<Protected Component={BusinessesDashboard} />}
      />
      <Route
        path="dashboard/blogs"
        element={<Protected Component={BlogsDashboard} />}
      />
      <Route
        path="dashboard/trending-projects"
        element={<Protected Component={TrendingProjects} />}
      />

      <Route
        path="dashboard/consultants"
        element={<Protected Component={ConsultantsDashboard} />}
      />
      <Route
        path="dashboard/businesses"
        element={<Protected Component={BusinessesDashboard} />}
      />
      <Route
        path="dashboard/blogs"
        element={<Protected Component={BlogsDashboard} />}
      />
      <Route
        path="dashboard/skills"
        element={<Protected Component={SkillsDashboard} />}
      />
    </Routes>
  );
}

export default App;
