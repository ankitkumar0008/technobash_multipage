import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  const gridImages = [
    "/img/grid1.webp",
    "/img/grid2.webp",
    "/img/grid3.webp",
    "/img/grid4.webp",
    "/img/grid5.webp",
    "/img/grid6.webp",
  ];

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-64 text-blue-50 -mx-10">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center relative z-10 -translate-y-56">
          <p className="mb-5 font-general text-[10px] uppercase">Technobash</p>

          <AnimatedTitle
            title="sponsors contact me hai"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        </div>

        {/* Grid Section */}
        <div className="mt-20 grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-700 shadow-lg"
            >
              <img
                src={image}
                alt={`Grid ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
