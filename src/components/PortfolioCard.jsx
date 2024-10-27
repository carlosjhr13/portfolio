/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const PortfolioCard = ({ id, category, title, year }) => {
  const portfolioImageUrl = `/public/${id}.jpg`;

  return (
    <div className="flex justify-center bg-white shadow-black-500/50 shadow-lg p-3 text-gray-900 font-quicksand rounded-lg max-w-[100%] h-auto">
      <div className="cardContent">
        <div>
          <div className="overflow-hidden">
            <Link to={`/detail/${id}`}>
              <img
                className="h-[200px] w-full align-middle inline-block object-cover rounded-md transition ease-in-out delay-150 hover:scale-150 duration-1000"
                src={portfolioImageUrl}
                alt={title}
              />
            </Link>
          </div>
          <div className="my-2">
            <h2 className="font-bold">{title}</h2>
            <p className="text-xs">{category.toUpperCase()}</p>
            <div className="flex mt-2 justify-between items-center">
              <p className="font-bold text-xl">
                <span className="text-xs text-gray-500">year</span> {year}
              </p>
              <Link to={`/detail/${id}`}>
                <p className="px-4 py-1 rounded-full bg-orange-500 text-white w-fit text-xs font-semibold">
                  more
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
