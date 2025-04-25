// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PortfolioList } from "./PortfolioList";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export const Portfolio = () => {
  const [category, setCategory] = useState("all");
  const { language } = useLanguage();
  const t = translations[language];

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="px-10 pt-[70px]">
      <div className="flex justify-center sticky top-6 z-10 mb-4">
        <div className="flex gap-2 md:gap-4">
          <a
            href="#"
            onClick={() => handleCategoryChange("all")}
            className={category === "all" ? "font-bold" : ""}
          >
            {t.portfolio.categories.all}
          </a>
          <a
            href="#"
            onClick={() => handleCategoryChange("brand")}
            className={category === "brand" ? "font-bold" : ""}
          >
            {t.portfolio.categories.brand}
          </a>
          <a
            href="#"
            onClick={() => handleCategoryChange("branding")}
            className={category === "branding" ? "font-bold" : ""}
          >
            {t.portfolio.categories.branding}
          </a>
          <a
            href="#"
            onClick={() => handleCategoryChange("developing")}
            className={category === "developing" ? "font-bold" : ""}
          >
            {t.portfolio.categories.developing}
          </a>
        </div>
      </div>

      <PortfolioList category={category} />
    </div>
  );
};
