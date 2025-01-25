import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OpenInBrowserPrompt from "./components/OpenInChromeBanner";
import Events from "./components/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from "./components/Landing_page";

function App() {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <OpenInBrowserPrompt />
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
