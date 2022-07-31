import "./style.scss";
import Sidebar from "../Sidebar";
import Sosialbar from "components/Sosialbar";


const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="pages">
                <Sosialbar/>
            </div>
        </div>
    )
};

export default Layout;