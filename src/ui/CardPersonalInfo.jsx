import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
export const CardPersonalInfo = ({ title, info, img }) => {
  const handleClick = () => {
    let url;
    switch (title.toLowerCase()) {
      case "linkedin":
        url = "https://www.linkedin.com/in/carlosjhr12/";
        break;
      case "email":
        url = "mailto:carlosjhr13@gmail.com";
        break;
      case "phone":
        url = "tel:+59897979539";
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`infoCard flex justify-between w-full bg-white rounded-md p-5 backdrop-blur-md shadow-black-800 shadow-xl ${
        ["linkedin", "email", "phone"].includes(title.toLowerCase())
          ? "cursor-pointer"
          : ""
      }`}
    >
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs">{info}</p>
      </div>
      <img className="w-4 h-4 min-w-4" src={img} alt={title} />
    </motion.div>
  );
};
