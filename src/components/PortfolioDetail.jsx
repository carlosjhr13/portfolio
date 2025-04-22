import { Navigate, useNavigate, useParams } from "react-router";
import { getPortfolioById } from "../helpers/getPortfolioById";
import { useMemo, useEffect } from "react";

export const PortfolioDetail = () => {
  const { id } = useParams();
  const portfolio = useMemo(() => getPortfolioById(id), [id]);
  const portfolioImageUrl = `/assets/${id}.jpg`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!portfolio) {
    return <Navigate to="home" />;
  }

  return (
    <div className="px-10 pt-[120px] pb-10 font-quicksand flex justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[768px]">
        <h2 className="self-start font-medium text-3xl mb-4">
          {portfolio.title}
        </h2>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={portfolioImageUrl}
              alt={portfolio.title}
            />
            <div>
              <p>{portfolio.category}</p>
              <p className="text-xs font-semibold -mt-1">
                made in {portfolio.year}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 bg-black/10 hover:bg-black/30 px-2 py-1 rounded-full"
              onClick={onNavigateBack}
            >
              <img
                className="w-4 h-4 min-w-4"
                src={`/assets/icons/arrow-left.svg`}
                alt="arrow-left"
              />
              Go Back
            </button>
            {portfolio.url && (
              <a
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full"
              >
                <img
                  className="w-4 h-4 min-w-4"
                  src={`/assets/icons/go-to-url.svg`}
                  alt="external-link"
                />
                View Live Example
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <img
            className="w-full shadow-black-500/50 shadow-lg rounded-lg"
            src={portfolioImageUrl}
            alt={portfolio.title}
          />
          <div className="w-full">
            <p>{portfolio.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
