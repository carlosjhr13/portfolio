import { useNavigate } from "react-router";
import { CardPersonalInfo } from "../ui/CardPersonalInfo";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const ContactMe = () => {
  const { language } = useLanguage();
  const t = translations[language].contactMe;

  const [content, setContent] = useState({
    image: "work",
    text: t.slides.work.text,
  });

  useEffect(() => {
    setContent((prevContent) => ({
      ...prevContent,
      text: t.slides[prevContent.image].text,
    }));
  }, [language, t]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate("/");
  };

  const handleImageChange = (selectedImage) => {
    setContent({
      image: selectedImage,
      text: t.slides[selectedImage].text,
    });
  };

  return (
    <div className="w-full h-lvh md:px-10 px-2 pt-[70px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
      <div className="flex md:flex-row flex-col items-center w-full md:max-w-[1080px] h-full md:max-h-[680px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-3 gap-3 ">
        <div
          className={`flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat w-3/3 h-full min-h-full rounded-lg p-5 transition-all duration-700 ease-in-out`}
          style={{
            backgroundImage: `url('./assets/icons/${
              content.image === "work"
                ? "working-at-home"
                : content.image === "music"
                ? "listen-music"
                : "spend-time-family"
            }.jpeg')`,
          }}
        >
          <div className="navItems flex w-full justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rounded-full object-cover"
                src={`./assets/icons/perfilPhoto.jpg`}
                alt="Carlos Hernandez"
              />
              <p className="text-sm text-black">{t.personalInfo.name.info}</p>
            </div>

            <button
              className="flex items-center gap-2 bg-white/50 px-2 py-1 rounded-full text-sm"
              onClick={onNavigateBack}
            >
              <img
                className="w-4 h-4 min-w-4"
                src={`./assets/icons/arrow-left.svg`}
                alt="arrow-left"
              />
              {t.backButton}
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 w-full justify-center">
              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "work" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => handleImageChange("work")}
              />
              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "music" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => handleImageChange("music")}
              />
              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "family" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => handleImageChange("family")}
              />
            </div>
            <p className="right-0 bottom-0 left-0 backdrop-blur-md p-4 bg-white/30 text-black rounded-xl transition-all duration-700 ease-in-out">
              {content.text}
            </p>
          </div>
        </div>
        <div className="md:flex flex-col gap-3 w-full md:w-1/3 h-full grid grid-cols-2 md:mt-0 mt-5 pb-8">
          <CardPersonalInfo
            title={t.personalInfo.name.title}
            info={t.personalInfo.name.info}
            img={`./assets/icons/signature-solid.svg`}
          />
          <CardPersonalInfo
            title={t.personalInfo.country.title}
            info={t.personalInfo.country.info}
            img={`./assets/icons/earth-americas-solid.svg`}
          />
          <CardPersonalInfo
            title={t.personalInfo.email.title}
            info={t.personalInfo.email.info}
            img={`./assets/icons/envelope-regular.svg`}
          />
          <CardPersonalInfo
            title={t.personalInfo.phone.title}
            info={t.personalInfo.phone.info}
            img={`./assets/icons/mobile-screen-button-solid.svg`}
          />
          <CardPersonalInfo
            title={t.personalInfo.linkedin.title}
            info={t.personalInfo.linkedin.info}
            img={`./assets/icons/linkedin.svg`}
          />
        </div>
      </div>
    </div>
  );
};
