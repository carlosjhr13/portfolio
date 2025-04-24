import { CurriculumItemData } from "../ui/CurriculumItemData";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    // xl:bg-red-300 lg:bg-yellow-300 md:bg-blue-300 sm:bg-pink-500
    <div className="w-full h-full lg:px-10 pt-[70px] flex items-center justify-center font-quicksand">
      <div className="bg-gray-50 w-full h-full px-4 lg:px-10 py-10 lg:pl-20 flex flex-col items-center rounded-lg shadow-black-800 shadow-2xl max-w-[1280px]">
        <div className="w-full pb-20 text-center md:text-left">
          <h2 className="text-6xl font-bold">Carlos Hernandez</h2>
          <h3 className="text-xl font-semibold">
            UX/UI Design & Software Engineer
          </h3>
        </div>
        {/* Personal data */}
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
                  <p className="text-xl font-semibold">Profile</p>
                  <img
                    className="w-28 h-28 rounded-full object-cover"
                    src={`./assets/icons/perfilPhoto.jpg`}
                    alt="Carlos Hernandez"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-sm text-center md:text-start">
                  I am a software engineer and UI/UX designer with over 5 years
                  of experience. My ability to integrate design and development
                  allows me to create effective and viable solutions, ensuring
                  that user experiences are not only attractive but also
                  technically feasible.
                  <br />
                  <br />
                  Passionate about user research and user-centered design, I
                  believe that collaboration and trust are fundamental to
                  achieving exceptional results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
              Work <br /> Experience
            </div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year="2021 - Present"
              company="Globant"
              logoCompany={`./assets/icons/company-globant.png`}
              titlePosition="Software Engineer"
              description={[
                "Designed intuitive and functional interfaces for web applications, improving user experience and ensuring effective implementation with the development team",
                "Conducted user research and usability testing that resulted in a 25% improvement in user satisfaction according to post-implementation surveys",
                "Collaborated with multidisciplinary teams using agile methodologies, ensuring the delivery of high-quality products aligned with client expectations",
                "Worked with clients such as (Autodesk, Cencosud, SEVEN Park - Qiddiya)",
              ]}
            />
            <CurriculumItemData
              year="2021 - Present"
              company="PetMimo"
              logoCompany={`./assets/icons/company-petmimo.png`}
              titlePosition="UI/UX Designer & Software Engineer"
              description={[
                "Created and developed user interfaces for the App and web, ensuring a smooth and attractive experience through a user-centered approach",
                "Created a product for the App consisting of a QR code to be used by pets to be found in case of loss. Interface and physical product design",
                "Integrated design and development principles, which allowed me to communicate effectively with developers and optimize the implementation process",
              ]}
            />
            <CurriculumItemData
              year="2016 - 2017"
              company="Croma"
              logoCompany={`./assets/icons/company-croma.jpeg`}
              titlePosition="Graphic Designer"
              description={[
                "Developed signage systems and identity manuals that improved brand visibility in the market",
                "Coordinated more than 10 graphic design projects, delivering results that increased customer satisfaction by 90%",
                "Participated in the creation of web designs and interfaces for small App functionalities",
              ]}
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
            <div className="text-xl text-black font-bold">Hard Skills</div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year="Design"
              company=""
              titlePosition=""
              description="Figma, Illustrator, Photoshop, Sketch, 3D"
            />
            <CurriculumItemData
              year="Development"
              company=""
              titlePosition=""
              description="HTML, CSS, JavaScript, TypeScript, React, React Native, Svelte Kit, Cypress, Jest"
            />
            <CurriculumItemData
              year="Tools"
              company=""
              titlePosition=""
              description="Agile, Scrum, Kanban, Git, Jira, Trello"
            />
          </div>
        </motion.div>
        {/* Soft Skills */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full">
          <div className="">
            <div className="text-xl text-black font-bold">Soft Skills</div>
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
              description={[
                "Excellent communication skills to present and defend design ideas",
                "Ability to collaborate effectively with interdisciplinary teams, optimizing workflow",
                "Strong analytical and problem-solving skills",
                "Exceptional time management and organization",
                "Passion for creating user-centered experiences",
              ]}
            />
          </div>
        </div>
        {/* Education */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16 w-full">
          <div className="">
            <div className="text-xl text-black font-bold">Education</div>
            <hr className="w-1/4 border border-black mt-4 md:flex hidden" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <div className="border-t-2 border-yellow-600"></div>
              <div className="border-t-2 border-blue-600 col-span-3"></div>
            </div>
            <CurriculumItemData
              year="2008 - 2014"
              company="Instituto Superior de Diseño - ISDI"
              titlePosition="Visual Communication Designer "
              description="Skills in visual design, corporate identity, and editorial and digital design, with knowledge in typography, composition, and color usage. Also trained in basic audiovisual production and experienced in project management, enabling work in multidisciplinary teams. Their training promotes creative thinking and problem solving, allowing them to develop innovative and effective solutions for visual communication in print and digital media."
            />
          </div>
        </div>
        <hr className="border-black w-1/3 pb-8" />
        <p className="text-center w-2/3 text-black text-sm">
          I am excited about the possibility of bringing my design and
          development experience to the team, creating innovative and
          user-centered solutions. Don&#39;t hesitate to contact me for more
          information!
        </p>
      </div>
    </div>
  );
};
