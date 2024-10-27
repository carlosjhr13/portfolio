import { useNavigate } from "react-router";
import { CardPersonalInfo } from "../ui/CardPersonalInfo";
import { useState } from "react";

export const ContactMe = () => {
  const [content, setContent] = useState({
    image: "work",
    text: "Me apasiona lo que hago, disfruto asumir nuevos retos que me permitan aprender y crecer profesionalmente, encontrando satisfacción en el esfuerzo y los resultados de mi trabajo.",
  });
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate("/");
  };

  const handleImageChange = (selectedImage, selectedText) => {
    setContent({ image: selectedImage, text: selectedText });
  };

  return (
    <div className="w-full h-lvh md:px-10 px-2 pt-[70px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
      <div className="flex md:flex-row flex-col items-center w-full md:max-w-[1080px] h-full md:max-h-[680px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-3 gap-3 ">
        <div
          className={`flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat w-3/3 h-full min-h-full rounded-lg p-5 transition-all duration-700 ease-in-out`}
          style={{
            backgroundImage: `url('/public/icons/${
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
                src={`/public/icons/perfilPhoto.jpg`}
                alt="Carlos Hernandez"
              />
              <p className="text-sm text-black">Carlos Hernandez</p>
            </div>

            <button
              className="flex items-center gap-2 bg-white/50 px-2 py-1 rounded-full text-sm"
              onClick={onNavigateBack}
            >
              <img
                className="w-4 h-4 min-w-4"
                src={`/public/icons/arrow-left.svg`}
                alt="arrow-left"
              />
              Back to Home
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 w-full justify-center">
              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "work" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() =>
                  handleImageChange(
                    "work",
                    "Me apasiona lo que hago, disfruto asumir nuevos retos que me permitan aprender y crecer profesionalmente, encontrando satisfacción en el esfuerzo y los resultados de mi trabajo."
                  )
                }
              />
              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "music" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() =>
                  handleImageChange(
                    "music",
                    "La música es mi compañera constante mientras trabajo. Escuchar mis canciones favoritas me ayuda a concentrarme, relajarme y encontrar la inspiración que necesito para dar lo mejor de mí en cada tarea."
                  )
                }
              />

              <button
                className={`w-10 h-3 rounded-full ${
                  content.image === "default" ? "bg-white" : "bg-white/50"
                }`}
                onClick={() =>
                  handleImageChange(
                    "default",
                    "El tiempo en familia es invaluable para mí. Encontrar un equilibrio entre el trabajo y los momentos con mis seres queridos es esencial, ya que ellos son mi fuente de motivación y energía para seguir adelante cada día."
                  )
                }
              />
            </div>
            <p className="right-0 bottom-0 left-0 backdrop-blur-md p-4 bg-white/30 text-black rounded-xl transition-all duration-700 ease-in-out">
              {content.text}
            </p>
          </div>
        </div>
        <div className="md:flex flex-col gap-3 w-full md:w-1/3 h-full grid grid-cols-2 md:mt-0 mt-5 pb-8">
          <CardPersonalInfo
            title="Name"
            info="Carlos Hernandez"
            img={`/public/icons/signature-solid.svg`}
          />
          <CardPersonalInfo
            title="Country"
            info="Uruguay"
            img={`/public/icons/earth-americas-solid.svg`}
          />
          <CardPersonalInfo
            title="Language"
            info="Spanish - English"
            img={`/public/icons/language-solid.svg`}
          />
          <CardPersonalInfo
            title="Email"
            info="carlosjhr13@gmail.com"
            img={`/public/icons/envelope-regular.svg`}
          />
          <CardPersonalInfo
            title="Phone"
            info="+598 97979539"
            img={`/public/icons/mobile-screen-button-solid.svg`}
          />
        </div>
      </div>
    </div>
  );
};
