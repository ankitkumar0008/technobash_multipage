import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to the tech fest of gsm coe
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver about the events <br /><b></b>"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>With a vibrant lineup of</p>
          <p className="text-gray-500">
          hackathons,quizzes and hands-on competitions, 
          get ready to explore a world of possibilities, ignite your passion for technology, 
          and be inspired by the spirit of innovation that defines GSMCOE
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image tech_ani_img">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
