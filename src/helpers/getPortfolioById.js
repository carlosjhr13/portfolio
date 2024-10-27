import { portfolios } from "../data/portfolio";

export const getPortfolioById = (id) => {
  return portfolios.find((portfolio) => portfolio.id === id);
};
