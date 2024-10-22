import { useLocation } from "react-router-dom";
import { useAdmin } from "../../../store/useSelector";
import "./Navbar.css";
import { sidebarItem } from "../../utils";

const Navbar = () => {
  const admin = useAdmin();
  const { pathname } = useLocation();
  return (
    <nav>
      <h1>{sidebarItem.find((item) => item.link == pathname)?.title}</h1>
      <div>
        <h1>{admin.admin?.username}</h1>
        <p>{admin.admin?.email}</p>
      </div>
    </nav>
  );
};

export default Navbar;