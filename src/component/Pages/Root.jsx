import { Outlet } from "react-router-dom";
import App from "../../App";
import Navbar from "../Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;