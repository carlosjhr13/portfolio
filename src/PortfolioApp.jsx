import { PortfolioRouter } from "./router/PortfolioRouter";
import { LanguageProvider } from './context/LanguageContext';

export const PortfolioApp = () => {
  return (
    <LanguageProvider>
      <PortfolioRouter />
    </LanguageProvider>
  );
};
