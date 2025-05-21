import { CurriculumItemData } from "../ui/CurriculumItemData";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="w-full h-full lg:px-10 pt-[70px] flex items-center justify-center font-quicksand">
      <div className="bg-gray-50 w-full h-full px-4 lg:px-10 py-10 lg:pl-20 flex flex-col items-center rounded-lg shadow-black-800 shadow-2xl max-w-[1280px]">
        <div className="w-full pb-20 text-center md:text-left">
          <h2 className="text-6xl font-bold">{t.title}</h2>
          <h3 className="text-xl font-semibold">{t.subtitle}</h3>
        </div>
        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 pb-16 w-full"
        >
          <div className=""></div>
          <div className="col-span-2">
            <div className="md:grid md:grid-cols-4 flex flex-col items-center gap-4">
              <div className="flex justify-start">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl font-semibold">{t.profile.title}</p>
                  <img
                    className="w-28 h-28 rounded-full object-cover"
                    src={`./assets/icons/perfilPhoto2.jpg`}
                    alt="Carlos Hernandez"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-sm text-center md:text-start">
                  {t.profile.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Data */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full">
          <div className="">
            <div className="text-xl text-black font-bold">
              {t.personalData.title}
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year=""
              company=""
              titlePosition=""
              description={t.personalData.items}
            />
          </div>
        </div>
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full"
        >
          <div className="">
            <div className="text-xl text-black font-bold">
              {t.workExperience.title}
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year={t.workExperience.globant.period}
              company="Globant"
              logoCompany={`./assets/icons/company-globant.png`}
              titlePosition="Software Engineer"
              description={t.workExperience.globant.description}
            />
            <CurriculumItemData
              year={t.workExperience.petmimo.period}
              company="PetMimo"
              logoCompany={`./assets/icons/company-petmimo.png`}
              titlePosition="UI/UX Designer & Software Engineer"
              description={t.workExperience.petmimo.description}
            />
            <CurriculumItemData
              year={t.workExperience.croma.period}
              company="Croma"
              logoCompany={`./assets/icons/company-croma.jpeg`}
              titlePosition={t.workExperience.croma.title}
              description={t.workExperience.croma.description}
            />
          </div>
        </motion.div>
        {/* Hard Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full"
        >
          <div className="">
            <div className="text-xl text-black font-bold">
              {t.hardSkills.title}
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year={t.hardSkills.design.title}
              company=""
              titlePosition=""
              description="Figma, Illustrator, Photoshop, Sketch, 3D"
            />
            <CurriculumItemData
              year={t.hardSkills.development.title}
              company=""
              titlePosition=""
              description="HTML, CSS, JavaScript, TypeScript, React, React Native, Svelte Kit, Cypress, Jest"
            />
            <CurriculumItemData
              year={t.hardSkills.tools.title}
              company=""
              titlePosition=""
              description="Agile, Scrum, Kanban, Git, Jira, Trello"
            />
          </div>
        </motion.div>
        {/* Soft Skills */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full">
          <div className="">
            <div className="text-xl text-black font-bold">
              {t.softSkills.title}
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year=""
              company=""
              titlePosition=""
              description={t.softSkills.skills}
            />
          </div>
        </div>
        {/* Education */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full">
          <div className="">
            <div className="text-xl text-black font-bold">
              {t.education.title}
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year="2018 - Present"
              company="Self-taught - (Udemy, Globant University, FreeCodeCamp) "
              titlePosition="Frontend Developer"
            />
            <CurriculumItemData
              year="2008 - 2014"
              company="Instituto Superior de Diseño - ISDI"
              titlePosition="Visual Communication Designer "
              description={t.education.degree.description}
            />
          </div>
        </div>
        <hr className="border-black w-1/3 pb-8" />
        <p className="text-center w-2/3 text-black text-sm">{t.footer}</p>
      </div>
    </div>
  );
};
