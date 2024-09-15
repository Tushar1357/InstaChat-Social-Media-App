import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { useEffect } from "react";

function App() {
  const data = useLoaderData()

  return (
    <div className="d-flex bg-dark">
      <SideBar loggedIn={data} />
      <div className="d-flex w-100 justify-content-between flex-column">
        <div>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
