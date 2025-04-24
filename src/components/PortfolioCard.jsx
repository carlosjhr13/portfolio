import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const PortfolioCard = ({ id, category, title, year }) => {
  const portfolioImageUrl = `./assets/${id}.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="flex justify-center bg-white shadow-black-500/50 shadow-lg p-3 text-gray-900 font-quicksand rounded-lg max-w-[100%] h-auto"
    >
      <div className="cardContent">
        <div>
          <motion.div className="overflow-hidden" whileHover={{ scale: 1.02 }}>
            <Link to={`/detail/${id}`}>
              <img
                className="h-[200px] w-full align-middle inline-block object-cover rounded-md transition ease-in-out delay-150 hover:scale-150 duration-1000"
                src={portfolioImageUrl}
                alt={title}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="my-2"
          >
            <h2 className="font-bold">{title}</h2>
            <p className="text-xs">{category.toUpperCase()}</p>
            <div className="flex mt-2 justify-between items-center">
              <p className="font-bold text-xl">
                <span className="text-xs text-gray-500">year</span> {year}
              </p>
              <Link to={`/detail/${id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-1 rounded-full bg-orange-600 hover:bg-orange-500 text-white w-fit text-xs font-semibold"
                >
                  more
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
