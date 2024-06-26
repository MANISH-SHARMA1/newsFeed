import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreate, MdOutlineManageHistory } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link id="link" to="/">
        <RxDashboard />
        Dashboard
      </Link>

      <Link id="link" to="/createNews">
        <MdOutlineCreate />
        Create News
      </Link>

      <Link id="link" to="/manageNews">
        <MdOutlineManageHistory />
        Manage News
      </Link>

      <Link id="link" to="/performanceReports">
        <GrDocumentPerformance />
        Performance
      </Link>

      <Link id="link" to="/newsFeed">
        <IoNewspaperOutline />
        News Feed
      </Link>
    </div>
  );
}

export default Navbar;
