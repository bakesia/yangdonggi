import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./ui/Header";
import DashBoardPage from "./components/DashBoardPage";
import CreateY from "./components/CreateY";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 p-3 min-h-[100vh]">
        <Header />
        <main className="justify-center items-center">
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/create" element={<CreateY />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
