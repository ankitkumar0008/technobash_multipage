import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Hero from "./Hero";
import Story from "./Story";

export default function Landing_page() {
    return (
        <>
            <Hero />
            <About />
            {/* <Features /> */}
            <Story />
            <Contact />
        </>
    )
}