/* eslint-disable react/prop-types */
export const CurriculumItemData = ({
  year,
  company,
  titlePosition,
  description,
}) => {
  return (
    <div className="itemWorkExperience grid grid-cols-4 py-6">
      <div>
        <div className="year font-bold text-black">{year}</div>
        <div className="company text-sm">{company}</div>
      </div>
      <div className="col-span-3">
        <div className="titlePosition font-bold text-black">
          {titlePosition}
        </div>
        <div className="descriptionPosition text-sm">{description}</div>
      </div>
    </div>
  );
};
