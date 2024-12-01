import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function App({ cart }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-container">
      {!isHomePage && <Navbar cart={cart} />}
      <Outlet />
    </div>
  );
}

export default App;
