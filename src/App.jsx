import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/menus/Nav";
import LoginPage from "./pages/LoginPage";
import GroupPage from "./pages/GroupPage";

function App() {
  return (
    <div className="bg-lc-#F9F4F5 min-h-dvh">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/group-page" element={<GroupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
