import { motion } from "framer-motion";
import React, { useState, useCallback, useEffect } from "react";

// Social Media Icons as SVG Components
const GitHubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const SendIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Sample project and certification data
const projects = [
  {
    title: "Doctor Appointment Booking App",
    image:
      "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/Screenshot%202025-05-08%20211442.png",
    description:
      "Built using the MERN stack. It allows patients to easily find doctors and book appointments while doctors can manage schedules and consult with patients.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    githubLink: "https://prescripto-f9un.onrender.com/",
  },
  {
    title: "Job Search Portal",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/20.png",
    description:
      "A modern job search platform built with MERN stack, ShadCN UI, Tailwind CSS, and Redux for seamless job browsing, application tracking and employer interactions.",
    technologies: ["Node.js", "React", "MongoDB", "Express", "TailwindCSS"],
    githubLink: "https://job-portal-mb94.onrender.com/",
  },
  {
    title: "CryptoPlace",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/1.png",
    description:
      "A cryptocurrency price tracker built with React, fetching real-time market data via APIs.",
    technologies: ["React", "CoinGeckoAPI"],
    githubLink:
      "https://cryptoplace-b63vvf10g-tanushas-projects-39a46d30.vercel.app/",
  },
  {
    title: "Expense Tracker",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/2.png",
    description:
      "A React-based financial app that helps users track income and expenses created using Context API.",
    technologies: ["React", " CSS"],
    githubLink: "https://expense-tracker-react-1811.netlify.app/",
  },
  {
    title: "Text to Speech Converter",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/3.png",
    description:
      "A simple tool that converts typed text into speech using the Web Speech API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://text-to-speech-converter-1.netlify.app/",
  },
  {
    title: "QR Code Generator",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/4.png",
    description:
      "Generates QR codes from user input URLs or text, useful for quick sharing",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://qr-code-generator-2024.netlify.app/",
  },
  {
    title: "JS Drum Kit",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/16.png",
    description:
      "A fun, interactive drum kit where users can play different drum sounds using keyboard keys.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://js-drum-kit-2024.netlify.app/",
  },
  {
    title: "Quote of the Day",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/17.png",
    description:
      "Displays random motivational quotes using an API, users can also post it on X.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://quote-of-the-day-web-app.netlify.app/",
  },
  {
    title: "Starbucks Landing Page",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/18.png",
    description:
      "A responsive UI clone of Starbucks' homepage with smooth animations and modern design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://resplendent-monstera-17e2ab.netlify.app/",
  },
  {
    title: "Animated Login Page",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/5.png",
    description: "A futuristic, animated login page with a hacker-style theme.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://hacker-login-99.netlify.app/",
  },
  {
    title: "Amazon Home Page",
    image: "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/6.png",
    description:
      "A visually accurate clone of Amazon’s homepage layout and design.",
    technologies: ["HTML", "CSS"],
    githubLink: "https://amazon-clone-12.netlify.app/",
  },
  {
    title: "Stopwatch & Timer",
    image:
      "https://tanusha-portfolio-main.netlify.app/assets/img/jpg/timer.png",
    description:
      "A digital stopwatch with start, pause, reset and lap functionality and a timer with pause and reset functionality built using React and Tailwind CSS.",
    technologies: ["React", "TS Particles", "Tailwind CSS"],
    githubLink: "https://aesthetic-timer-drab.vercel.app/",
  },
];

const certifications = [
  {
    title: "Advanced SQL",
    issuer: "Kaggle",
    image: "/assets/22.png",
    link: "https://www.kaggle.com/learn/certification/tanushachoudhary/advanced-sql",
  },
  {
    title: "Agile Project Management",
    issuer: "HP Life",
    image: "/assets/1.png",
    link: "https://www.life-global.org/certificate/78ad461a-8f7e-44f7-a0d5-6cb06ea294d8",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    image: "/assets/3.png",
    link: "https://www.linkedin.com/learning/certificates/f38383d6b5a516db6faed257045440ae0897c4e05156c2abccc3169c45da5751?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2Fjo2qEwXT4mJnkxsWyBJiA%3D%3D",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    image: "/assets/4.png",
    link: "https://freecodecamp.org/certification/fccb93b1f47-3dc9-4854-b9ee-d72d4224875f/responsive-web-design",
  },
  {
    title: "Java Certification",
    issuer: "HackerRank",
    image: "/assets/5.png",
    link: "https://www.hackerrank.com/certificates/iframe/b6b63ee6dbca",
  },
  {
    title: "Digital Marketing",
    issuer: "Accenture",
    image: "/assets/6.png",
    link: "https://www.futurelearn.com/certificates/h65ve3h",
  },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  // Handle form input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Basic form validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        alert("Please fill in all fields");
        return;
      }

      // Here you would typically send the form data to a backend service
      console.log("Form submitted:", formData);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Optional: Show success message
      alert("Message sent successfully!");
    },
    [formData]
  );

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Determine color classes based on dark mode
  const getBgClass = (lightClass, darkClass) =>
    isDarkMode ? darkClass : lightClass;

  const getTextClass = (lightClass, darkClass) =>
    isDarkMode ? darkClass : lightClass;

  return (
    <div
      className={`
      ${getBgClass("bg-gray-50", "bg-gray-900")} 
      ${getTextClass("text-gray-900", "text-gray-100")} 
      min-h-screen font-sans transition-colors duration-300
    `}
    >
      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`
          fixed top-2 right-4 z-50 
          ${getBgClass("bg-white", "bg-gray-800")} 
          ${getTextClass("text-gray-800", "text-gray-200")} 
          p-2 rounded-full shadow-md
        `}
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </motion.button>

      {/* Navigation */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-40 pr-20
        ${getBgClass("bg-white", "bg-gray-800")} 
        shadow-md
      `}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              text-2xl font-bold 
              ${getTextClass("text-blue-600", "text-blue-400")} 
              cursor-pointer
            `}
            onClick={() => scrollToSection("home")}
          >
            Tanusha
          </motion.div>
          <div className="flex space-x-6">
            {[
              { name: "Home", id: "home" },
              { name: "Projects", id: "projects" },
              { name: "Certifications", id: "certifications" },
              { name: "Contact", id: "contact" },
              { name: "About", id: "about" },
            ].map((section) => (
              <motion.button
                key={section.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className={`
                  text-md font-medium transition-colors 
                  ${
                    activeSection === section.id
                      ? getTextClass("text-blue-600", "text-blue-400")
                      : getTextClass(
                          "text-gray-600 hover:text-blue-500",
                          "text-gray-300 hover:text-blue-300"
                        )
                  }
                `}
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: isDarkMode
            ? "linear-gradient(to right, #1e3c72, #2a5298, #0f2027)"
            : "linear-gradient(to right, #b5e9fc, #6dd5fa, #2980b9)",
        }}
        className={`
          pt-24 container mx-auto px-32 min-h-screen flex items-center
          ${getBgClass("bg-gray-50", "bg-gray-900")}
        `}
      >
        <div className="grid md:grid-cols-2 gap-8  items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`
              text-5xl font-bold mb-4 
              ${getTextClass("text-gray-900", "text-gray-100")}
            `}
            >
              Hi, I'm{" "}
              <span className={getTextClass("text-blue-600", "text-blue-300")}>
                Tanusha Choudhary
              </span>
            </h1>
            <p
              className={`
              text-xl mb-6 
              ${getTextClass("text-gray-700", "text-gray-300")}
            `}
            >
              Programmer | Full Stack Developer | Problem Solver
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://res.cloudinary.com/dk3p0uh4n/image/upload/v1747060228/resume_1_sservu.pdf"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className={`
                  ${getBgClass("bg-blue-600", "bg-blue-700")} 
                  text-white px-6 py-3 rounded-lg font-semibold
                `}
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                whileHover={{ scale: 1.1 }}
                className={`
                  border-2 
                  ${getBgClass(
                    "border-blue-600 text-blue-600 hover:bg-white",
                    "border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-700"
                  )} 
                  px-6 py-3 rounded-lg font-semibold
                `}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className={`
              w-60 h-60 
              ${getBgClass("bg-blue-100", "bg-blue-900/50")} 
              rounded-full flex items-center justify-center
            `}
            >
              <img
                className="w-60 h-60 rounded-full"
                src="https://avatars.githubusercontent.com/u/144540796?v=4"
                alt=""
              />
              {/* <CodeIcon
                className={`
                w-14 h-14 
                ${getTextClass("text-blue-600", "text-blue-400")}
              `}
              /> */}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section
        id="about"
        className={`
          py-20 
          ${getBgClass("bg-gray-50", "bg-gray-900")}
        `}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`
            text-4xl font-bold text-center mb-12 
            ${getTextClass("text-gray-900", "text-gray-100")}
          `}
          >
            About Me
          </h2>
          <div className=" max-w-4xl mx-auto">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className={`
                  p-6 rounded-lg shadow-md text-center 
                  ${getBgClass("bg-white", "bg-gray-800")}
                `}
            >
              <p className="text-lg">
                I am a pre-final year student at SGSITS, Indore, pursuing an
                undergraduate degree in Information Technology. With a strong
                academic foundation in IT, I am deeply interested in exploring
                the fields of Software Engineering, Web Development, Data
                Science, and Machine Learning. I am eager to apply theoretical
                knowledge to practical scenarios and develop innovative
                solutions. Currently, I am open to internships, projects, and
                learning opportunities that allow me to grow and refine my
                skills in these areas. My goal is to become proficient in modern
                technologies and contribute meaningfully to the tech industry by
                solving real-world problems with cutting-edge tools and
                frameworks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className={`
          py-20 
          ${getBgClass("bg-white", "bg-gray-800")}
        `}
      >
        <div className="container mx-auto px-16">
          <h2
            className={`
            text-4xl font-bold text-center mb-12 
            ${getTextClass("text-gray-900", "text-gray-100")}
          `}
          >
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 py-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`
                  py-8 px-4 rounded-lg shadow-md 
                  ${getBgClass("bg-gray-100", "bg-gray-700")}
                `}
              >
                <h3
                  className={`
                  text-2xl font-semibold mb-4 
                  ${getTextClass("text-blue-600", "text-blue-400")}
                `}
                >
                  {project.title}
                </h3>
                <img
                  className="h-1/2 mx-auto my-3"
                  src={project.image}
                  alt=""
                />
                <p
                  className={`
                  mb-4 
                  ${getTextClass("text-gray-700", "text-gray-300")}
                `}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`
                        px-2 py-1 rounded-full text-sm 
                        ${getBgClass(
                          "bg-blue-100 text-blue-800",
                          "bg-blue-900 text-blue-200"
                        )}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center 
                    ${getTextClass(
                      "text-gray-700 hover:text-blue-600",
                      "text-gray-300 hover:text-blue-400"
                    )}
                  `}
                >
                  <button
                    className={` rounded-lg px-2 py-1 ${getBgClass(
                      "bg-blue-800 text-blue-100 hover:bg-blue-600",
                      "bg-blue-100 text-blue-800 hover:bg-blue-300"
                    )}`}
                  >
                    View Live
                  </button>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className={`
          py-20 
          ${getBgClass("bg-gray-50", "bg-gray-900")}
        `}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`
            text-4xl font-bold text-center mb-12 
            ${getTextClass("text-gray-900", "text-gray-100")}
          `}
          >
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-12 px-12 mx-auto cursor-pointer">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link} // Link to the certificate
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`
                  p-6 rounded-lg shadow-md text-center 
                  ${getBgClass("bg-white", "bg-gray-800")}
                  `}
                >
                  <h3
                    className={`
                  text-2xl font-semibold mb-2 
                  ${getTextClass("text-blue-600", "text-blue-400")}
                `}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`
                    mb-2 
                    ${getTextClass("text-gray-700", "text-gray-300")}
                    `}
                  >
                    {cert.issuer}
                  </p>
                  <img src={cert.image} alt="" />
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`
          py-20 
          ${getBgClass("bg-white", "bg-gray-800")}
        `}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`
            text-4xl font-bold text-center mb-12 
            ${getTextClass("text-gray-900", "text-gray-100")}
          `}
          >
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 px-20 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className={`
                p-8 rounded-lg shadow-md 
                ${getBgClass("bg-gray-100", "bg-gray-700")}
              `}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className={`
                    block mb-2 
                    ${getTextClass("text-gray-700", "text-gray-300")}
                  `}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`
                      w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${getBgClass(
                        "bg-white border-gray-300 focus:ring-blue-500",
                        "bg-gray-600 border-gray-600 text-gray-100 focus:ring-blue-400"
                      )}
                    `}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className={`
                    block mb-2 
                    ${getTextClass("text-gray-700", "text-gray-300")}
                  `}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`
                      w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${getBgClass(
                        "bg-white border-gray-300 focus:ring-blue-500",
                        "bg-gray-600 border-gray-600 text-gray-100 focus:ring-blue-400"
                      )}
                    `}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`
                    block mb-2 
                    ${getTextClass("text-gray-700", "text-gray-300")}
                  `}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`
                      w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${getBgClass(
                        "bg-white border-gray-300 focus:ring-blue-500",
                        "bg-gray-600 border-gray-600 text-gray-100 focus:ring-blue-400"
                      )}
                    `}
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-full py-3 rounded-lg font-semibold flex items-center justify-center 
                    ${getBgClass(
                      "bg-blue-600 text-white hover:bg-blue-700",
                      "bg-blue-700 text-white hover:bg-blue-600"
                    )}
                  `}
                >
                  <SendIcon className="mr-2 w-5 h-5" /> Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information and Social Links */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div
                className={`
                p-6 rounded-lg shadow-md 
                ${getBgClass("bg-gray-100", "bg-gray-700")}
              `}
              >
                <h3
                  className={`
                  text-2xl font-semibold mb-4 
                  ${getTextClass("text-blue-600", "text-blue-400")}
                `}
                >
                  Get in Touch
                </h3>
                <p
                  className={`
                  mb-4 
                  ${getTextClass("text-gray-700", "text-gray-300")}
                `}
                >
                  Feel free to reach out to me for any inquiries, collaboration
                  opportunities, or just to say hello!
                </p>
                <div className="space-y-3">
                  <div
                    className={`
                    flex items-center 
                    ${getTextClass("text-gray-700", "text-gray-300")}
                  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`
                      h-6 w-6 mr-3 
                      ${getTextClass("text-blue-600", "text-blue-400")}
                    `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    tanushac1811@gmail.com
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Connect with Me
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/tanushachoudhary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <GitHubIcon className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/tanusha-choudhary-1811c/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <LinkedInIcon className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/tanushac1811"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <TwitterIcon className="w-8 h-8" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
