import AnimatedTitle from "./AnimatedTitle";
import "./Contact.css"

const Contact = () => {
  const gridImages = ["/img/shanacoder.png"];
  const linkArray = ["https://shanacoder.com/"];
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-64 text-blue-50 -mx-10 sponser_padd">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 -translate-y-56">
          <p className="mb-5 font-general text-[10px] uppercase">Technobash</p>

         <AnimatedTitle 
            title="our sponsors"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        </div>

        {/* Centered Image Section */}
        <div className="flex justify-center items-center mt-20 relative z-10 sponcer_img">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700 shadow-lg max-w-xs"
            >
              <a href={linkArray[index]} target="_blank">
              <img
                src={image}
                alt={`Grid ${index + 1}`}
                className="w-full h-full object-cover"
              />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
