import { Route, Routes, useNavigate } from "react-router-dom";
import { useAdmin, useModal } from "./store/useSelector";
import Login from "./pages/Login/Login";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import Navbar from "./components/ui/Navbar/Navbar";
import { useEffect } from "react";
import Admin from "./pages/Admin/Admin";
import Modal from "./components/ui/Modal/Modal";
import { useDispatch } from "react-redux";
import { Close } from "./store/Slices/modal/model";

const App = () => {
  const admin = useAdmin();
  console.log(admin);
  
  const modal = useModal();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin?.is_active) {
      navigate("/login");
    }
  }, [navigate, admin]);
  const handleModal = () => {
    if (modal.is_active) {
      dispatch(Close({}))
    }
  }
  return (
    <>
      <div className={`app ${modal.is_active && "app-opacity"}`} onClick={handleModal}>
        {admin?.is_active ? (
          <>
            <Sidebar />
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<Admin />} />
              </Routes>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
      <Modal />
    </>
  );
};

export default App;
