import Header from "../components/header";
import "../CSS/home.css";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";

function HomePage() {
  console.log("home page loaded");
  return (
    <div className="homePage">
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
}

export default HomePage;
