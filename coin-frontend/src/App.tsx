import { Route, Routes, useNavigate } from "react-router-dom";
import { useAdmin } from "./store/useSelector";
import Login from "./pages/Login/Login";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import Navbar from "./components/ui/Navbar/Navbar";
import { useEffect } from "react";

const App = () => {
  const admin = useAdmin();
  const navigate = useNavigate();
  useEffect(() => {
    if (!admin?.is_active) {
      navigate("/login");
    }
  }, [navigate, admin]);
  return (
    <>
      {admin?.is_active ? (
        <>
            <Sidebar />
            <main>
              <Navbar />
              <Routes></Routes>
            </main>
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
