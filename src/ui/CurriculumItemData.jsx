/* eslint-disable react/prop-types */
export const CurriculumItemData = ({
  year,
  company,
  titlePosition,
  description,
  logoCompany,
}) => {
  return (
    <div className="itemWorkExperience flex flex-col items-start gap-4 md:grid grid-cols-4 py-6">
      <div className="flex gap-4 md:flex-col-reverse">
        {logoCompany && (
          <img
            className="w-12 h-12 rounded-full object-cover shadow-md"
            src={logoCompany}
            alt="Carlos Hernandez"
          />
        )}
        <div>
          <div className="year font-bold text-yellow-600">{year}</div>
          <div className="company text-sm">{company}</div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="titlePosition font-bold text-blue-600">
          {titlePosition}
        </div>
        <div className="descriptionPosition text-sm">{description}</div>
      </div>
    </div>
  );
};
