
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Landing from "./pages/LandingPage/LandingPage";
import GiftFinder from "./pages/GiftFinder/GiftFinder";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GiftIdeas from "./pages/GiftIdeas/GiftIdeas";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/gift-finder" element={<GiftFinder/>} /> */}
      <Route path="/giftIdeas" element={<GiftIdeas />} />
      </Routes> 
      <Footer />
     </BrowserRouter>
  );
}

export default App;

