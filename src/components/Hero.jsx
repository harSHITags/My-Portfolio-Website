import { Rocket, Mail, Download, Code } from "lucide-react";
import myImage from "../assets/profile//Linkedin Profile pic .jpg";

const Hero = ({ showToast }) => {
  const viewResume = () => {
   
    window.open("https://drive.google.com/file/d/1pVOVxQ5iLDo-JxRsnk5ByQbC8587zStR/view?usp=drive_link", "_blank");
    showToast("Opening resume...", "info");
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            <p className="text-blue-500 font-mono text-sm mb-3 md:mb-4 animate-slide-in-left">👋 Hello, I'm</p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight animate-slide-in-left">
              Harshita{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Rathore
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 text-slate-700 dark:text-slate-300 animate-slide-in-left">
              <span className="inline-block overflow-hidden border-r-2 border-blue-500 whitespace-nowrap animate-typing">
                Front-End Developer & AI Enthusiast
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-2xl leading-relaxed animate-slide-in-left">
              Passionate about creating beautiful, responsive web applications with modern technologies. Currently
              pursuing B.Tech in Computer Science with hands-on experience in AI/ML from Google Developer Program.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-in-left">
              <button
                onClick={() => scrollToSection("#projects")}
                className="flex items-center gap-2 px-5 py-2.5 md:px-7 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">View My Work</span>
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-5 py-2.5 md:px-7 md:py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Get In Touch</span>
              </button>
              <button
                onClick={viewResume}
                className="flex items-center gap-2 px-5 py-2.5 md:px-7 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">View Resume</span>
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-in-right order-1 lg:order-2">
            <div className="relative w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] lg:w-[24rem] lg:h-[24rem] mx-auto">
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src={myImage}
                  alt="Harshita Rathore"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Circles */}
              <div
                className="absolute inset-0 border-2 border-blue-200 dark:border-blue-800 rounded-full animate-float"
                style={{ 
                  width: "110%", 
                  height: "110%", 
                  top: "-5%", 
                  left: "-5%"
                }}
              />
              <div
                className="absolute inset-0 border-2 border-blue-100 dark:border-blue-900 rounded-full animate-float"
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                  animationDelay: "1s",
                  animationDirection: "reverse"
                }}
              />
              
              {/* Floating Badges */}
              {/* Badge Top Right Over Ring */}
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/20 dark:border-white/10 shadow-lg animate-float hover:scale-105 transition-transform w-32 sm:w-40 md:w-48">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm md:text-sm text-white">Web Developer</h4>
                      <p className="text-[10px] sm:text-xs text-slate-300 dark:text-slate-400">React & JS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge Bottom Left Over Ring */}
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-20">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/20 dark:border-white/10 shadow-lg animate-float hover:scale-105 transition-transform w-32 sm:w-40 md:w-48 animation-delay-1000">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white">
                      🤖
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm md:text-sm text-white">AI Enthusiast</h4>
                      <p className="text-[10px] sm:text-xs text-slate-300 dark:text-slate-400">ML & Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto mt-16 md:mt-24 p-4 md:p-6 bg-white/10 dark:bg-slate-900/40 rounded-xl md:rounded-2xl border border-blue-400/25 shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-shadow duration-300 hover:shadow-blue-400/30 group animate-fade-in-up">
          <div className="absolute -top-3 left-4 w-8 h-8 md:w-8 md:h-8 bg-blue-600/90 text-white text-xl md:text-2xl font-semibold rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            ❝
          </div>
          <p className="text-slate-900 dark:text-slate-100 text-base sm:text-lg font-normal italic leading-snug mb-3 md:mb-4 pl-3">
            "Between human insight and machine speed — I bridge the two."
          </p>
          <p className="text-right text-slate-600 dark:text-slate-400 text-xs font-medium tracking-wide">
            — Harshita Rathore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;