import { Link, useLocation } from "react-router-dom";
import { sidebarItem } from "../../utils";
import "./Sidebar.css";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logOutAdmin } from "../../../store/admin/admin";

const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const handLogOut = () => {
     dispatch(logOutAdmin({}))
  }
  return (
    <aside>
      <h1>
        <span>Coin</span> Dashboard
      </h1>
      <nav>
        <ul>
          {sidebarItem.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.link}
                  className={pathname == item.link ? "active-a" : ""}
                >
                  {item.title} <item.icon />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button onClick={handLogOut}>
        LogOut <IoIosLogOut />{" "}
      </button>
    </aside>
  );
};

export default Sidebar;
