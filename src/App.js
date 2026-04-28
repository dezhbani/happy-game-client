import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import useDarkMode from "./hooks/useDarkMode"; // فرض می‌کنیم این hook وضعیت dark mode و localStorage را مدیریت می‌کند

function App() {
    const [darkMode] = useDarkMode();
    return (
        <>
            <SkeletonTheme
                baseColor={darkMode ? "#2e323d" : "#f3f3f3"} // رنگ پایه برای حالت تاریک و روشن
                highlightColor={darkMode ? "#3c4155" : "#ecebeb"} // رنگ هایلایت برای حالت تاریک و روشن
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <ToastContainer />
            </SkeletonTheme >
        </>
    );
}

export default App;
