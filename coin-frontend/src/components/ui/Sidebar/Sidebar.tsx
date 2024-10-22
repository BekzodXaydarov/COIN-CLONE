import { Link, useLocation, useNavigate } from "react-router-dom";
import { api, sidebarItem } from "../../utils";
import "./Sidebar.css";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logOutAdmin } from "../../../store/Slices/admin/admin";
import axios from "axios";
import { useAdmin } from "../../../store/useSelector";

const Sidebar = () => {
  const { pathname } = useLocation();
  const admin = useAdmin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handLogOut = async () => {
     await axios.put(api + "/admin/" + admin.admin.id,{...admin.admin,is_active:false},{
      headers:{
        Authorization: `Bearer ${admin.admin?.token}`
      }
     })
     dispatch(logOutAdmin({}))
     navigate("/login")
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
        Log out <IoIosLogOut />
      </button>
    </aside>
  );
};

export default Sidebar;
