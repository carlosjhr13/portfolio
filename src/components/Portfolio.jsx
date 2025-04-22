// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PortfolioList } from "./PortfolioList";

export const Portfolio = () => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="px-10 pt-[70px]">
      <div className="flex justify-center sticky top-5 z-10 mb-4">
        <div className="flex gap-4">
          <a
            href="#"
            onClick={() => handleCategoryChange("all")}
            className={category === "all" ? "font-bold" : ""}
          >
            All
          </a>
          <a
            href="#"
            onClick={() => handleCategoryChange("brand")}
            className={category === "brand" ? "font-bold" : ""}
          >
            Brand
          </a>
          <a
            href="#"
            onClick={() => handleCategoryChange("branding")}
            className={category === "branding" ? "font-bold" : ""}
          >
            Branding
          </a>
          {/* <a
            href="#"
            onClick={() => handleCategoryChange("ux")}
            className={category === "ux" ? "font-bold" : ""}
          >
            UX
          </a> */}
          <a
            href="#"
            onClick={() => handleCategoryChange("developing")}
            className={category === "developing" ? "font-bold" : ""}
          >
            Developing
          </a>
        </div>
      </div>

      <PortfolioList category={category} />
    </div>
  );
};
