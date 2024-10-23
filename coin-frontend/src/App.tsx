import { Navigate, Route, Routes } from "react-router-dom";
import { useAdmin, useModal } from "./store/useSelector";
import Login from "./pages/Login/Login";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import Navbar from "./components/ui/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Modal from "./components/ui/Modal/Modal";
import { useDispatch } from "react-redux";
import { Close } from "./store/Slices/modal/model";
import Teacher from "./pages/Teacher/Teacher";

const App = () => {
  const admin = useAdmin(); 
  const modal = useModal();
  const dispatch = useDispatch()
  const handleModal = () => {
    if (modal.is_active) {
      dispatch(Close({}))
    }
  }
  return (
    <>
      <div className={`app ${modal.is_active && "app-opacity"}`} onClick={handleModal}>
        {admin?.admin?.password  ? (
          <>
            <Sidebar />
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/login" element={<Navigate to={'/'} />} />
              </Routes>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to={'/login'} />} />
          </Routes>
        )}
      </div>
      <Modal />
    </>
  );
};

export default App;
