import { useNavigate } from "react-router";
import { CardPersonalInfo } from "../ui/CardPersonalInfo";
import { useState } from "react";

export const ContactMe = () => {
  const [content, setContent] = useState({
    image: "work",
    text: "I am passionate about what I do, I enjoy taking on new challenges that allow me to learn and grow professionally, finding satisfaction in the effort and results of my work.",
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
              <p className="text-sm text-black">Carlos Hernandez</p>
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
                    "I am passionate about what I do, I enjoy taking on new challenges that allow me to learn and grow professionally, finding satisfaction in the effort and results of my work."
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
                    "Music is my constant companion while I work. Listening to my favorite songs helps me concentrate, relax, and find the inspiration I need to give my best in every task."
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
                    "Family time is invaluable to me. Finding a balance between work and moments with my loved ones is essential, as they are my source of motivation and energy to keep moving forward each day."
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
            img={`./assets/icons/signature-solid.svg`}
          />
          <CardPersonalInfo
            title="Country"
            info="Uruguay"
            img={`./assets/icons/earth-americas-solid.svg`}
          />
          <CardPersonalInfo
            title="Language"
            info="Spanish - English"
            img={`./assets/icons/language-solid.svg`}
          />
          <CardPersonalInfo
            title="Email"
            info="carlosjhr13@gmail.com"
            img={`./assets/icons/envelope-regular.svg`}
          />
          <CardPersonalInfo
            title="Phone"
            info="+598 97979539"
            img={`./assets/icons/mobile-screen-button-solid.svg`}
          />
          <CardPersonalInfo
            title="Linkedin"
            info="carlosjhr12"
            img={`./assets/icons/linkedin.svg`}
          />
        </div>
      </div>
    </div>
  );
};
