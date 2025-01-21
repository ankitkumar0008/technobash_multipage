import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import "./features.css";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  content,
  Register_Link,
  More_Link
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="card">
      <div className="relative size-full card_whole_body">
        <div className="cardBody">
          <div className="card__side card__side--front">
            <div className="card__theme">
              <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
              />

              <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                  <h1 className="bento-title special-font">{title}</h1>
                  {description && (
                    <p className="mt-3 max-w-64 text-xs md:text-base">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card__side card__side--back">
            <div className="card__details">{content}</div>
          </div>
        </div>

        <div className="Buttons_cards">
          <a
            href={Register_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20 text-white">Registration</p>
          </a>

          <a
            href={More_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20 text-white">More ...</p>
          </a>
        </div>
      </div>
    </div>
  );
};


const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the events
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich universe where a vibrant array of events
          are waiting for you.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 w-full overflow-hidden rounded-md prepathon">
        <BentoCard
          src="/videos/feature-1.mp4"
          title={
            <>
              prep-<b>a</b>-thon
            </>
          }
          content="PREP-A-THON SAGA is a hackathon that focuses on basic interview aspects for the company to hire. This event will contain all the topics needed for preparation of a company. The questions will be as per the most simple and commonly asked questions in interviews, the event team will be responsible to integrate the questions in the gaming hackathon that is PREP-A-THON. There will be 6 stages to this Prep-a-thon:
          Aptitude 
          enigmaLogical 
          cascadeBingo 
          triviaTechsolve 
          crosswordDebugging 
          ParadoxCodeFlux"
          description="PREP-A-THON is a hackathon that focuses on basic interview aspects for the company to hire. This event will contain all the topics needed for preparation of a company. The questions will be set by the sponsor company."
          isComingSoon
          Register_Link ='https://docs.google.com/forms/d/e/1FAIpQLSdwuA5TUWwnUkw2Q0ELgXnA4htv5xrpCYDRNbd2oAA4qKxEMg/viewform?usp=dialog'
          More_Link='https://google.com'
        />
      </BentoTilt>

      <div className="grid  w-full grid-cols-2 grid-rows-5 gap-7 main_card_body">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/callofduty.mp4"
            title={
              <>
                call <b>of</b> duty
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Come join us for the Battle Royale and show us your amazing gaming skills and win cash prizes."
            isComingSoon
          ></BentoCard>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="img/prepathonlogo.png"
            title={
              <>
                BG<b>M</b>I
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Solve challenging clues and navigate through obstacles to win."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                pix<b>el</b> p<b>e</b>rfect
              </>
            }
            content="PIXEL PERFECT is an exciting event that challenges participants to showcase their design and development skills. In Round 1, participants will focus on crafting a visually appealing and user-friendly design for an application. This round emphasizes creativity and precision in design. In Round 2, the challenge escalates as participants develop the backend to bring their design to life. The application must be fully functional by the end of this round. PIXEL PERFECT provides a comprehensive platform for participants to demonstrate their expertise in both design and backend development, combining creativity with technical prowess."
            description="To create a website with innovative and creative designs."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                Digital Poster Competition on Innovative Business Ideas
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Come join us for a thrilling coding competition to solve challenging problems and showcase your programming skills."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1  md:col-span-1  row-span-1 md:row-span-2">
          <BentoCard
            src="videos/ENTC1.mp4"
            title={
              <>
                Mr <b>B</b>EAST TECHNO GAMES
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Unleash your artistic creativity in this hands-on crafting event."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-7.mp4"
            title={
              <>
                TAG IT RIGHT : HTML Challenges!
              </>
            }
            content="•	Creativity: Design visually appealing Webpages.
                    •	Technical Proficiency : Use advanced HTML 5 features like semantic elements, forms and multimedia.
                    •	Problem Solving : Implement a task using HTML with constraints or challenges"
            description="Build and program robots to compete in thrilling challenges."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 parallelchild row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-8.mp4"
            title={
              <>
                Cat-War
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Showcase your culinary skills and compete to win exciting prizes."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 parallelchild row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-9.mp4"
            title={
              <>
                Ecovision 2k25
              </>
            }
            content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            description="Dive into the world of streaming and compete with your content creation skills."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
