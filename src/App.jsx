import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import DashBoardPage from "./components/DashBoardPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import StatsPage from "./components/StatsPage";
import "./App.css";

function AppRoutes() {
  // const isLogined = false;
  const isLogined = true;

  if (!isLogined) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-start items-start text-4xl text-white p-5 bg-sky-600">
        🪣 양동이
      </header>
      <main
        className="flex-grow w-full px-4 py-16 bg-white flex flex-col min-h-0
                   md:max-w-4xl md:mx-auto"
      >
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
      <nav
        className="w-full bg-slate-100 border-t flex justify-around text-base
                  md:max-w-4xl md:mx-auto"
      >
        <Link to="/" className="flex-1 text-center py-3 hover:bg-slate-200">
          홈
        </Link>
        <Link
          to="/stats"
          className="flex-1 text-center py-3 hover:bg-slate-200"
        >
          통계
        </Link>
        <Link
          to="/profile"
          className="flex-1 text-center py-3 hover:bg-slate-200"
        >
          프로필
        </Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
