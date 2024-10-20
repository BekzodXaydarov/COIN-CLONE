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
  const modal = useModal();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin?.is_active) {
      navigate("/login");
    }
  }, [navigate, admin]);
  const handleModal = () => {
    if(modal.is_active){
      dispatch(Close({}))
    }
  }
  return (
    <>
      {admin?.is_active ? (
        <>
          <div className={`app ${modal.is_active && "app-opacity"}`} onClick={handleModal}>
            <Sidebar />
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<Admin />} />
              </Routes>
            </main>
          </div>
          <Modal />
       </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
