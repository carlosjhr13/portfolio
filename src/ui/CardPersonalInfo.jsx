/* eslint-disable react/prop-types */
export const CardPersonalInfo = ({ title, info, img }) => {
  return (
    <div className="infoCard flex justify-between w-full bg-white rounded-md p-5 backdrop-blur-md shadow-black-800 shadow-xl">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs">{info}</p>
      </div>
      <img className="w-4 h-4 min-w-4" src={img} alt={title} />
    </div>
  );
};
