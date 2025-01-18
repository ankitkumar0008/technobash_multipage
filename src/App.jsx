import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      {/* <InfiniteScroll/> */}
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
