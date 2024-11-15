import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/menus/Nav";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="bg-lc-#F9F4F5 min-h-dvh">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
