import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import "./Story.css";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const [images, setImages] = useState(
    Array.from({ length: 10 }, (_, i) => `/img/gallery-${i + 1}.webp`)
  );
  const [isLoading, setIsLoading] = useState(false);

  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  // Load more images when scrolling
  const loadMoreImages = () => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setImages((prevImages) => [
        ...prevImages,
        ...Array.from(
          { length: 10 },
          (_, i) => `/img/gallery-${prevImages.length + i + 1}.webp`
        ),
      ]);
      setIsLoading(false);
    }, 1000); // Simulated API call delay
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        // loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="layer">
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            the multiversal ip world
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="Our technobash </br> team "
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <div className="flex flex-row overflow-hidden w-auto">
                    <img
                      ref={frameRef}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseLeave}
                      onMouseEnter={handleMouseLeave}
                      //src="/img/entrance.webp"
                      alt="entrance.webp"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dynamically Rendered Images */}
      {/* <div className="mt-10 w-full flex flex-wrap justify-center gap-4"> */}
      <div className="firstheading"> Department Heads</div>
      <div class="stock-ticker">
        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="firstheading2"> Second heading</div>
      <div class="stock-ticker2">
        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="firstheading3"> Third heading</div>
      <div class="stock-ticker3">
        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>

        <ul>
          {images.map((image, index) => (
            <li>
              <img
                // class=""
                key={index}
                src={image}
                alt={`gallery-${index + 1}.webp`}
                className="w-60 h-60 object-cover rounded-lg shadow-lg Rishi_img"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingImage;
