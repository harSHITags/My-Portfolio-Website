import { Briefcase, Users, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import PR from "../assets/Experience/PR.png";
import Card from "../assets/Experience/card.jpg";
import Litopia from "../assets/Experience/Litopia.jpg";

const EnhancedImageSlider = () => {
  const images = [
    {
      src: PR,
      alt: "Sahityik Literary Club Event",
      caption: "PR & Outreach Executive",
    },
    {
      src: Card,
      alt: "Event Management",
      caption: "Managed Litopia 2.0",
    },
    {
      src: Litopia,
      alt: "Team Collaboration",
      caption: "Team Collaboration",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  // Handle auto-play
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        next();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 700);
  }, [images.length, isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 700);
  }, [images.length, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      next();
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      prev();
    }
  };

  return (
    <div className="mt-4 md:mt-6">
      <div
        ref={sliderRef}
        className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-md mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-700 dark:border-gray-600 bg-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider content */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                <p className="text-white text-xs md:text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1 md:py-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
          
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-600 bg-gray-800/80 text-gray-200 hover:bg-gray-700 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mx-auto" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-600 bg-gray-800/80 text-gray-200 hover:bg-gray-700 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-auto" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 p-3 md:p-4 bg-gray-900/80">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-blue-400 w-4 md:w-6" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-5000 ease-linear"
            style={{ 
              width: `${((current + 1) / images.length) * 100}%`,
              transition: isAutoPlaying ? 'width 5s linear' : 'none'
            }}
          />
        </div>
      </div>
      
      <div className="text-center mt-2 md:mt-3">
        <span className="text-xs md:text-sm font-medium text-gray-400">
          {current + 1} of {images.length}
        </span>
      </div>
    </div>
  );
};

export default function Experience() {
  const experiences = [
    {
      category: "Professional Experience",
      icon: Briefcase,
      items: [
        {
          title: "AI/ML Intern",
          company: "Google Developer Program",
          period: "June - July 2025",
          location: "Medicaps University, Indore",
          type: "Internship",
          description: [
            "Built an offline Android app in Kotlin for plant disease detection using TensorFlow Lite",
            "Trained a CNN model with TensorFlow & Keras for multi-class crop disease classification",
            "Implemented data augmentation, model validation, and deployed via Google Colab",
            "Converted trained model to TFLite for real-time predictions on Android Studio",
            "Enabled users to diagnose diseases from leaf images with treatment suggestions",
            "Achieved ~99%+ accuracy on test data; no internet required for predictions",
          ],
          achievements: [
            "Google Developer Badges",
            "Model Accuracy",
            "Real-time Predictions",
            "Offline Functionality",
          ],
          link: "https://g.dev/Harshita_Rathore_MUCSE25",
          linkText: "View Google Developer Profile",
        },
      ],
    },
    {
      category: "Leadership & Extracurricular",
      icon: Users,
      items: [
        {
          title: "PR & Outreach Executive",
          company: "Sahityik Literary Club",
          period: "2024 - 2025",
          location: "MediCaps University Indore",
          type: "Management Role",
          description: [
            "Managed sponsorships and organized literary events with 500+ participants",
            "Handled PR outreach and external communications",
            "Developed audience engagement campaigns increasing participation by 40%",
            "Coordinated with multiple sponsers and vendors",
            "Enhanced communication and project management skills",
          ],
          achievements: [],
          hasSlider: true,
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-[#0a0a0a] dark:to-[#000000]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-center text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          My journey through internships, leadership roles, and hands-on projects that shaped my technical and professional skills.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-in-up">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full mt-1" />
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] hover:-translate-y-0.5 md:hover:-translate-y-1"
                  >
                    <div className="absolute -left-3 md:-left-4 top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 md:mb-6 gap-3 md:gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg mb-1">
                          {item.company}
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            📍 {item.location}
                          </span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 md:gap-2">
                        <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs md:text-sm font-bold border border-blue-500/30">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h5 className="font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white text-sm md:text-base">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-2 md:space-y-3">
                        {item.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="flex items-start gap-2 md:gap-3 text-gray-700 dark:text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.achievements.length > 0 && (
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white text-sm md:text-base">
                          Key Achievements:
                        </h5>
                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                          {item.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="p-2 md:p-3 rounded-lg md:rounded-xl border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 text-center"
                            >
                              <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.link && (
                      <div className="mb-4 md:mb-6">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg text-sm md:text-base font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                        >
                          <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span>{item.linkText}</span>
                        </a>
                      </div>
                    )}
                    {item.hasSlider && <EnhancedImageSlider />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}