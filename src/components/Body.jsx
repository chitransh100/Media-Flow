import Sidebar from "./Sidebar.jsx"
import MainContainer from "./MainContainer.jsx"
import { Outlet } from "react-router-dom";
import Head from "./Head.jsx";

const Body=()=>
{
    return <div className="flex">
         {/* <Head></Head> */}
        <Sidebar/>
        <Outlet/>
        {/* <MainContainer></MainContainer> */}
    </div>
}
export default Body;