import { MapPin, Rocket, User, ExternalLink, Github, Check } from "lucide-react";
import LocalMate from "../assets/Projects/LocalMate.png" 
import portfolio from "../assets/Projects/portfolio.png"
import cosmic from "../assets/Projects/cosmic.png"

const Projects = () => {
  const projects = [
    {
      title: "LocalMate",
      subtitle: "Location-Based Services Finder",
      icon: MapPin,
      image: LocalMate, 
      liveDemo: "",
      sourceCode: "", 
      description:
        "A comprehensive web application that helps users discover nearby service providers like plumbers, electricians, and other professionals. Built with modern web technologies and integrated with real-time location services.",
      features: ["Real-time Geolocation", "Google Maps Integration", "Firebase Authentication", "Admin Panel"],
      technologies: ["ReactJS", "Node.js", "Firebase", "MongoDB", "Google Maps API"],
      stats: [
        { number: "500+", label: "Users" },
        { number: "50+", label: "Service Providers" },
        { number: "95%", label: "Satisfaction" },
      ],
      status: "Ongoing",
      gradient: "from-yellow-600 to-amber-600", 
    },
    {
      title: "Cosmic Explorer",
      subtitle: "Space Facts & ISS Tracker",
      icon: Rocket,
      image: cosmic,
      liveDemo: "", 
      sourceCode: "", 
      description:
        "An interactive web application that provides real-time space facts, tracks the International Space Station, and notifies users when the ISS is visible from their location. Features beautiful space-themed UI and educational content.",
      features: ["ISS Live Tracking", "Space Facts API", "Location-based Notifications", "Responsive Design"],
      technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Geolocation API"],
      stats: [
        { number: "1000+", label: "Page Views" },
        { number: "24/7", label: "Live Data" },
        { number: "100%", label: "Responsive" },
      ],
      status: "Ongoing",
      gradient: "from-indigo-800 to-purple-600",
    },
    {
      title: "Interactive Portfolio",
      subtitle: "Personal Portfolio ",
      icon: User,
      image: portfolio, 
      liveDemo: "https://vocal-seahorse-05efa4.netlify.app/", 
      sourceCode: "https://github.com/harSHITags/My-Portfolio-Website",
      description:
        "A modern, responsive portfolio website featuring glassmorphism designs and smooth animations. Showcases projects, skills, and experience with interactive elements and downloadable portfolio feature.",
      features: ["Glassmorphism Design", "Interactive Chatbot", "Smooth Animations", "Dark/Light Theme"],
      technologies: ["ReactJs", "Tailwind CSS", "Firebase", "Glassmorphism", "Responsive Design"],
      stats: [
        { number: "100%", label: "Responsive" },
        { number: "A+", label: "Performance" },
        { number: "Modern", label: "Design" },
      ],
      status: "Completed",
      gradient: "from-gray-900 to-blue-800", 
    },
  ];
  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-[1.01] hover:-translate-y-1"
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                  {/* Project Content */}
                  <div className="md:col-span-1 lg:col-span-2 space-y-4 md:space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div
                          className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${project.gradient} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg hover:rotate-3 hover:scale-110 transition-all duration-300`}
                        >
                          <project.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 md:px-4 md:py-2 bg-green-500/20 text-green-400 rounded-full text-xs md:text-sm font-medium border border-green-500/30 self-start sm:self-auto">
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 md:gap-3 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-lg md:rounded-xl border border-white/20 dark:border-white/10 hover:shadow-md transition-all duration-300 hover:translate-x-1"
                        >
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 md:px-4 md:py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 
             rounded-lg md:rounded-xl font-medium text-sm md:text-base text-white 
             bg-gradient-to-r from-black to-gray-900 
             hover:from-gray-900 hover:to-black 
             transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
>  
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 border-2 rounded-lg md:rounded-xl font-medium text-sm md:text-base hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Visual & Stats */}
                  <div className="space-y-4 md:space-y-6">
                    {/* Project Visual - Updated to use actual image */}
                    <div className="w-full h-48 md:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Optional: Add a subtle overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10`} />
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div
                          key={stat.label}
                          className="text-center p-3 md:p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-lg md:rounded-xl border border-white/20 dark:border-white/10 hover:shadow-md transition-all duration-300 hover:scale-105"
                        >
                          <div className="text-xl md:text-2xl font-bold text-blue-500 mb-1">
                            {stat.number}
                          </div>
                          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;