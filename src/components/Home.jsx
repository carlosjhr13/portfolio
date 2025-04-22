import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('./assets/background-orange.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative flex w-full h-full px-10 gap-20 sm:justify-between pt-20 pb-10 md:pt-28 sm:pt-0">
        <div className="sm:flex flex-col sm:justify-end sm:items-center gap-4 mb-10 hidden">
          <span className="w-[1px] h-1/3 bg-white"></span>
          <a href="https://www.linkedin.com/in/carlosjhr12/">
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6 brightness-0 invert"
              src={`./assets/icons/linkeding.svg`}
              alt="linkeding"
            />
          </a>
          <a href="https://wa.link/2ha34r">
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6 brightness-0 invert"
              src={`./assets/icons/whatsapp.svg`}
              alt="whatsapp"
            />
          </a>
        </div>
        <section className="flex flex-1 h-full gap-10 md:justify-center flex-col">
          <div className="info flex flex-col justify-between md:justify-center gap-10 md:gap-6 h-full">
            <div className="flex flex-col gap-10">
              <h2 className="name text-yellow-200 text-5xl font-bold font-quicksand md:text-3xl xl:text-8xl">
                Carlos <br />
                HERNANDEZ
              </h2>
              <div className="description text-yellow-200 max-w-[600px] xl:text-lg md:text-sm xl:max-w-xl">
                I am a software engineer and UX designer focused on creating
                intuitive and attractive digital experiences. I combine design
                and development to transform ideas into functional solutions.
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-full bg-white/40 hover:bg-white/50 text-gray-900 sm:w-fit text-sm xl:text-md"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
          <img
            className="md:h-[130%] h-[60%] absolute bottom-0 right-0 self-end object-cover -z-10"
            src={`./assets/background-face.png`}
            alt="Carlos Hernandez"
          />
        </section>
      </div>
    </div>
  );
};
