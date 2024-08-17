import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LandingPage from "./pages/LandingPage/LandingPage";
import GiftFinder from "./pages/GiftFinder/GiftFinder";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gift-finder" element={<GiftFinder/>} />
      </Routes> 
     </BrowserRouter>
  );
}

export default App;

