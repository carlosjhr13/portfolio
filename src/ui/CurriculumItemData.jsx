/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const CurriculumItemData = ({
  year,
  company,
  titlePosition,
  description,
  logoCompany,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="itemWorkExperience flex flex-col items-start gap-4 md:grid grid-cols-4 py-6"
    >
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
          <div className="company text-sm font-medium">{company}</div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="titlePosition font-bold text-blue-600 mb-2">
          {titlePosition}
        </div>
        <div className="descriptionPosition text-sm flex flex-col gap-2">
          {Array.isArray(description)
            ? description.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{item}</span>
                </div>
              ))
            : description}
        </div>
      </div>
    </motion.div>
  );
};
