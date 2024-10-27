import { portfolios } from "../data/portfolio";

export const getPortfolioByCategory = (category) => {
  const validCategories = ["all", "brand", "branding", "ux"];

  if (!validCategories.includes(category)) {
    throw new Error(`${category} no existe actualmente`);
  }

  if (category === "all") {
    return portfolios;
  }

  return portfolios.filter((portfolio) => portfolio.category === category);
};
