import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-screen px-10 pt-[70px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-medium text-black">Oop! 404 Error!</p>
        <h3 className="text-center text-6xl font-bold text-black">
          Page Not
          <br />
          Found
        </h3>
        <button
          className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full text-sm"
          onClick={onNavigateBack}
        >
          <img
            className="w-4 h-4 min-w-4"
            src={`/public/icons/arrow-left.svg`}
            alt="arrow-left"
          />
          Back to Home
        </button>
      </div>
    </div>
  );
};
