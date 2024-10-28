import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const onContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="flex w-full h-full sm:h-screen px-10 gap-40 sm:justify-between pt-20 md:pt-28 sm:pt-0">
        {/* < className="flex w-full h-screen px-10 gap-40 bg-[url('./assets/icons/background.jpeg')]"> */}
        <div className="sm:flex flex-col sm:justify-end sm:items-center gap-4 mb-10 hidden">
          <span className="w-[1px] h-1/3 bg-gray-800"></span>
          <a href="https://www.linkedin.com/in/carlosjhr12/">
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6"
              src={`./assets/icons/linkeding.svg`}
              alt="linkeding"
            />
          </a>
          <a href="https://wa.link/2ha34r">
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6"
              src={`./assets/icons/whatsapp.svg`}
              alt="whatsapp"
            />
          </a>
        </div>
        <section className="flex flex-1 h-full gap-10 justify-center flex-col sm:flex-row">
          <div className="info flex flex-col justify-center gap-10 md:gap-6">
            <h2 className="name text-5xl font-light font-quicksand md:text-3xl xl:text-7xl">
              I am <br /> Carlos Hernandez
            </h2>
            <div className="description max-w-[600px] xl:text-2xl md:text-sm xl:max-w-4xl">
              Soy diseñador UX/UI y desarrollador web enfocado en crear
              experiencias digitales intuitivas y atractivas. Combino diseño y
              desarrollo para transformar ideas en soluciones funcionales.
            </div>
            <button
              className="px-5 py-2 rounded-full bg-blue-900 text-white sm:w-fit text-sm xl:text-2xl xl:px-8 xl:py-2"
              onClick={onContact}
            >
              Contact Me
            </button>
          </div>
          <img
            className="h-[90%] self-end object-cover"
            src={`./assets/imagenPerfil.png`}
            alt="Carlos Hernandez"
          />
        </section>
      </div>
    </div>
  );
};
