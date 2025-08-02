import { Briefcase, Users, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback } from "react";
import  PR from "../assets/Experience/PR.png";
import Card from "../assets/Experience/card.jpg";
import  Litopia from "../assets/Experience/Litopia.jpg";

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
      caption: "Managed Litopia 2.0 ",
    },
    {
      src: Litopia,
      alt: "Team Collaboration",
      caption: "Team Collaboration",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };


  return (
    <div className="mt-6">
      

      <div
        className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slider content */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === current
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < current
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-sm bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  border border-gray-300 dark:border-white/30 bg-white/80 dark:bg-white/20 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-white/30 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  border border-gray-300 dark:border-white/30 bg-white/80 dark:bg-white/20 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-white/30 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 p-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-blue-500 dark:bg-blue-400 w-6" 
                  : "bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-200 dark:bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-blue-600 transition-all duration-700 ease-out"
            style={{ width: `${((current + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="text-center mt-3">
        <span className="text-sm font-medium text-slate-600 dark:text-white/80">
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
            "Explored Fashion MNIST to deepen image classification understanding",
            "Used NumPy for preprocessing, activation visualizations (ReLU, Sigmoid, Tanh)",
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
          achievements: [
           
          ],
          hasSlider: true,
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto text-slate-600 dark:text-white/80">
          My journey through internships, leadership roles, and hands-on projects that shaped my technical and professional skills.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {experiences.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full mt-1" />
                </div>
              </div>

              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative rounded-3xl p-8 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-blue-500 dark:text-blue-400 font-semibold text-lg mb-1">
                          {item.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="text-slate-600 dark:text-white/80">
                            📍 {item.location}
                          </span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-slate-900 dark:text-white">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-3">
                        {item.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="flex items-start gap-3 text-slate-700 dark:text-white/90"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-slate-900 dark:text-white">
                        Key Achievements:
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        {item.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="p-3 rounded-xl border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 text-center"
                          >
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {item.link && (
                      <div className="mb-6">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
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