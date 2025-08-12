import { Cloud, ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";

import awsLogo from '../assets/certLogos/aws-svgrepo-com.svg';
import ciscoLogo from '../assets/certLogos/cisco-ar21~bgwhite.svg';
import googleLogo from '../assets/certLogos/google-developers-svgrepo-com.svg';


import HackerRank from '../assets/certLogos/HackerRank.svg';

const Certifications = () => {
  const certificates = [
    {
      title: "Python Essentials-I",
      issuer: "Cisco Networking Academy",
      icon: ciscoLogo,
      description: "",
      url: "https://drive.google.com/file/d/1DlJpI-dXIsMW2w5bsE4iCtl-yRPWSZPR/view?usp=drive_link"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      icon: awsLogo,
      description: "Foundational knowledge of AWS cloud services including S3, EC2, Lambda, and IAM.",
    },
    {
      title: "Introduction to AI",
      issuer:  "Cisco Networking Academy",
      icon: ciscoLogo,
      description: "",
      url:"https://www.credly.com/badges/3d7c1e16-b05f-4b81-a73f-30c689f5468b"
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      icon: HackerRank,
      description: "",
      url:"https://www.hackerrank.com/certificates/a690f45a7de8"
    },
  ];

  // Duplicate certificates for seamless infinite scroll
  const duplicatedCertificates = [...certificates, ...certificates];
  const sliderRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts
    if (sliderRef.current) {
      sliderRef.current.classList.add('animate-ultra-scroll');
    }
  }, []);

  const handleCertificateClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        {/* Google Developer Badges */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 id="GBadges" className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Google Developer Badges
          </h3>
          <a
            href="https://g.dev/Harshita_Rathore_MUCSE25"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <img
                  src={googleLogo}
                  alt="Google Developer Badge"
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Google Developer Profile
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  ML Foundations, TensorFlow, and Model Deployment badges
                </p>
              </div>
              <ExternalLink className="w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Infinite Scrolling Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">Professional Certifications</h3>
          <div className="relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex hover:animation-pause hover:cursor-grab active:cursor-grabbing"
            >
              {duplicatedCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 mx-4 rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:-translate-y-1 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-white/20 dark:border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden group-hover:rotate-3 group-hover:scale-110 transition-transform">
                      <img src={cert.icon} alt={cert.issuer} className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h4>
                    <p className="text-blue-400 text-sm mb-3">{cert.issuer}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{cert.description}</p>
                    <button 
                      onClick={() => handleCertificateClick(cert.url)}
                      disabled={!cert.url}
                      className={`flex items-center gap-2 text-sm font-medium ${
                        cert.url ? 'text-blue-500 hover:text-blue-400' : 'text-gray-400 cursor-not-allowed'
                      } transition-colors`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{cert.url ? "View Certificate" : "Coming Soon"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Complete Portfolio & Resume</h3>
          <a
            href="https://drive.google.com/drive/folders/1w14u5PN2eTSnQEmZ5qfF8Bd5NJcljVjY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 text-lg hover:scale-105 hover:-translate-y-0.5"
          >
            <Cloud className="w-6 h-6" />
            <span>Access All Certificates</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes ultra-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ultra-scroll {
          animation: ultra-scroll 20s linear infinite;
        }
        .hover\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Certifications;