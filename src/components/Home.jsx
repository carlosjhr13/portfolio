import { useNavigate } from "react-router";
import { useTypewriter } from "../hooks/useTypewriter";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const typedText = useTypewriter(t.home.typedPhrases, 200, 150, 3000);

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
        <div className="xl:flex flex-col xl:justify-end xl:items-center gap-4 mb-10 hidden">
          <span className="w-[1px] h-1/3 bg-white"></span>
          <a
            href="https://www.linkedin.com/in/carlosjhr12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6 brightness-0 invert"
              src={`./assets/icons/linkedin.svg`}
              alt="linkedin"
            />
          </a>
          <a
            href="https://wa.link/2ha34r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-4 h-4 min-w-4 xl:w-6 xl:h-6 brightness-0 invert"
              src={`./assets/icons/whatsapp.svg`}
              alt="whatsapp"
            />
          </a>
        </div>
        <section className="flex flex-1 xl:justify-center flex-col">
          <div className="info flex flex-col justify-between xl:justify-center gap-10 xl:gap-6 h-full">
            <div className="flex flex-col gap-8">
              <h2 className="name text-yellow-200 text-5xl font-bold font-quicksand xl:text-8xl">
                CARLOS <br />
                HERNANDEZ
              </h2>
              <div className="description text-yellow-200 max-w-[600px] md:max-w-[400px] xl:text-lg xl:max-w-xl">
                {t.home.intro}{" "}
                <span className="text-orange-950 font-bold">{typedText},</span>
                <br />
                {t.home.description}
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-full bg-white/40 hover:bg-white/50 shadow-md text-gray-900 md:w-fit text-sm xl:text-md"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
          <img
            className="h-[70%] md:h-[110%] absolute bottom-0 right-0 md:-bottom-40 lg:-bottom-20 self-end object-cover -z-10"
            src={`./assets/background-principal2.png`}
            alt="Carlos Hernandez"
          />
        </section>
      </div>
    </div>
  );
};
