import { CurriculumItemData } from "../ui/CurriculumItemData";

export const AboutMe = () => {
  return (
    <div className="w-full h-full lg:px-10 pt-[70px] flex items-center justify-center font-quicksand xl:bg-red-300 lg:bg-yellow-300 md:bg-blue-300 sm:bg-pink-500">
      <div className="bg-gray-50 w-full h-full px-4 lg:px-10 py-10 lg:pl-20 flex flex-col items-center rounded-lg shadow-black-800 shadow-2xl max-w-[1280px]">
        <div className="w-full pb-20">
          <h2 className="text-6xl font-bold">Carlos Hernandez</h2>
          <h3 className="text-xl font-semibold">
            UX/UI Design & Software Engineer
          </h3>
        </div>
        {/* Personal data */}
        <div className="grid md:grid-cols-3 pb-16 w-full">
          <div className=""></div>
          <div className="col-span-2">
            <div className="md:grid md:grid-cols-4 flex flex-col items-center gap-4">
              <div className="flex justify-start">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl font-semibold">Profile</p>
                  <img
                    className="w-28 h-28 rounded-full object-cover"
                    src={`./public/icons/perfilPhoto.jpg`}
                    alt="Carlos Hernandez"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-sm text-center md:text-start">
                  Soy un diseñador UI/UX con más de 5 años de experiencia y una
                  sólida base en desarrollo web. Mi habilidad para integrar
                  diseño y desarrollo me permite crear soluciones efectivas y
                  viables, garantizando que las experiencias de usuario sean no
                  solo atractivas, sino también técnicamente realizables.
                  <br />
                  Apasionado por la investigación de usuarios y el diseño
                  centrado en el usuario, creo que la colaboración y la
                  confianza son fundamentales para lograr resultados
                  excepcionales.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16">
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
              titlePosition="UI/UX Designer & Frontend Developer"
              description="• Diseñé interfaces intuitivas y funcionales para aplicaciones web, mejorando la experiencia del usuario y asegurando la implementación efectiva con el equipo de desarrollo. • Realicé investigaciones de usuarios y pruebas de usabilidad que resultaron en una mejora del 25% en la satisfacción del usuario según encuestas post-implementación. • Colaboré con equipos multidisciplinarios utilizando metodologías ágiles, garantizando la entrega de productos de alta calidad y alineados con las expectativas del cliente. •	He trabajado con clientes como (Autodesk, Cencosud, SEVEN Park)"
            />
            <CurriculumItemData
              year="2021 - Present"
              company="PetMimo"
              titlePosition="UI/UX Designer & Frontend Developer"
              description="• Creé y desarrollé las interfaces de usuario para la App y la web, asegurando una experiencia fluida y atractiva a través de un enfoque centrado en el usuario. •	Cree un producto para la App que consiste en un QR para que sean usados por las mascotas y sean encontradas en caso de perdida. Diseño de interfaz y de producto físico. •	Integré principios de diseño y desarrollo, lo que me permitió comunicarme eficazmente con los desarrolladores y optimizar el proceso de implementación."
            />
            <CurriculumItemData
              year="2016 - 2017"
              company="Croma"
              titlePosition="Graphic Designer"
              description="• Desarrollé sistemas de señalización y manuales de identidad que mejoraron la visibilidad de marcas en el mercado. • Coordiné más de 10 proyectos de diseño gráfico, entregando resultados que aumentaron la satisfacción del cliente en un 90%. • Participe en la realización de diseños web e interfaces para pequeñas funcionalidades en App."
            />
          </div>
        </div>
        {/* Hard Skills */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16">
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
        </div>
        {/* Soft Skills */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16">
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
              description="•	Excelentes habilidades de comunicación para presentar y defender ideas de diseño. •	Capacidad para colaborar eficazmente con equipos interdisciplinarios, optimizando el flujo de trabajo entre diseño y desarrollo. •	Fuertes habilidades analíticas y de resolución de problemas. •	Gestión del tiempo y organización excepcional. •	Pasión por crear experiencias centradas en el usuario"
            />
          </div>
        </div>
        {/* Education */}
        <div className="grid md:grid-cols-3 grid-cols-1 pb-16">
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
              description="Habilidades en diseño visual, identidad corporativa, y diseño editorial y digital, con conocimientos en tipografía, composición y uso del color. También están capacitados en producción audiovisual básica y tienen experiencia en la gestión de proyectos, lo que les permite trabajar en equipos multidisciplinarios. Su formación fomenta el pensamiento creativo y la resolución de problemas, permitiéndoles desarrollar soluciones innovadoras y efectivas para la comunicación visual en medios impresos y digitales."
            />
          </div>
        </div>
        <hr className="border-black w-1/3 pb-8" />
        <p className="text-center w-2/3 text-black text-sm">
          Estoy emocionado por la posibilidad de aportar mi experiencia en
          diseño y desarrollo al equipo, creando soluciones innovadoras y
          centradas en el usuario. ¡No dudes en contactarme para más
          información!
        </p>
      </div>
    </div>
  );
};
