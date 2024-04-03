import { basics, education, skills, projects } from "@/cv.json";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <div className="max-w-4xl rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="text-center">
          <img
            className="w-48 h-48 rounded-full mx-auto"
            src={basics.image}
            alt={basics.name}
          />
          <h2 className="font-bold text-xl mb-2">{basics.name}</h2>
          <p className="text-gray-700">{basics.label}</p>
          <p className="text-gray-500">{basics.summary}</p>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Educación</h3>
          {education.map((edu, index) => (
            <p key={index} className="text-gray-700">
              {edu.institution} - {edu.area} ({edu.startDate} - {edu.endDate})
            </p>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Habilidades</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="m-1 bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Proyectos</h3>
          <div>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="text-blue-500 hover:underline p-6"
            >
              {project.pname}
            </a>
          ))}
          </div>
       
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">Habilidades</h3>
          {skills.map((skill) => (
            <div className="flex relative gap-3 p-0 m-0 mx-auto">
              <h2 className="flex flex-nowrap gap-4">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
  );
};

export default ProfileCard;
