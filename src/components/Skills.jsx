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
           { name: "Java", color: "#ed8b00", icon: <DiJava /> },
        { name: "JavaScript", color: "#f7df1e", icon: <SiJavascript /> },
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
          { name: "ReactJS", color: "#61dafb", icon: <SiReact /> },
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300 group hover:translate-x-2 hover:scale-102"
                  >
                    <div
                      className="w-6 h-6 flex items-center justify-center text-white text-lg  text-[100px]"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiencyLevels.map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-900 dark:text-white">{item.skill}</span>
                  <span className="text-blue-500 font-bold">{item.level}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 dark:bg-white/5 rounded-full overflow-hidden border border-white/20 dark:border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
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
