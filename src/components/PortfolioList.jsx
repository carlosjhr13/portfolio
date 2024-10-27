import { getPortfolioByCategory } from "../helpers/getPortfolioByCategory";
import { PortfolioCard } from "./PortfolioCard";

// eslint-disable-next-line react/prop-types
export const PortfolioList = ({ category }) => {
  const portfolio = getPortfolioByCategory(category);

  return (
    <div className="gridWrapperClass grid gap-2 grid-flow-dense auto-rows-max grid-cols-2">
      {portfolio.map((p) => (
        <PortfolioCard key={p.id} {...p} />
      ))}
    </div>
  );
};
