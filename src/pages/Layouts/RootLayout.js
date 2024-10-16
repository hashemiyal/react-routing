import { NavLink,Outlet } from "react-router-dom";
import './../../App.css';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
      <nav>
        <h1>Test Application</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/careers">Careers</NavLink>
       
      </nav>
      <Breadcrumbs/>
    </header>
   
    <Outlet/>
        </div>
     );
}
 
export default RootLayout;