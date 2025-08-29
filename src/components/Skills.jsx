import { Code, Laptop, Database, Settings } from "lucide-react"
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGooglecolab,
} from "react-icons/si";
import { DiJava } from "react-icons/di";   
import { FaAws } from "react-icons/fa";    

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: " Core Java (J2SE)", color: "#ed8b00", icon: <DiJava /> },
        { name: "JavaScript (ES6+)", color: "#f7df1e", icon: <SiJavascript /> },
        { name: "Python", color: "#3776ab", icon: <SiPython /> },
      ],
    },
    {
      title: "Frontend Development",
      icon: Laptop,
      skills: [
        { name: "HTML5", color: "#e34f26", icon: <SiHtml5 /> },
        { name: "CSS3", color: "#1572b6", icon: <SiCss3 /> },
        { name: "Tailwind CSS", color: "#06b6d4", icon: <SiTailwindcss /> },
        { name: "React.js", color: "#61dafb", icon: <SiReact /> },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Firebase", color: "#ffca28", icon: <SiFirebase /> },
        { name: "MongoDB", color: "#47a248", icon: <SiMongodb /> },
        { name: "MySQL", color: "#4479a1", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", color: "#f05032", icon: <SiGithub /> },
        { name: "AWS (Basics)", color: "#ff9900", icon: <FaAws /> },
        { name: "Google Colab", color: "#ff6f00", icon: <SiGooglecolab /> },
      ],
    },
  ];

  const proficiencyLevels = [
    { skill: "Frontend Development", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "React Development", level: 80 },
    { skill: "Machine Learning", level: 50 },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-[#0a0a0a] dark:to-[#000000]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
                  <category.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{category.title}</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group hover:translate-x-1 md:hover:translate-x-2 hover:scale-[1.02]"
                  >
                    <div
                      className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300 text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Proficiency Levels */}
        <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">Proficiency Levels</h3>
          <div className="space-y-4 md:space-y-6">
            {proficiencyLevels.map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <span className="font-medium text-gray-900 dark:text-white text-sm md:text-base">{item.skill}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm md:text-base">{item.level}%</span>
                </div>
                <div className="w-full h-2 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;