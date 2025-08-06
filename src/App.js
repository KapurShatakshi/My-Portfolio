import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import icons
import { 
  FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiMysql, SiPostgresql, SiMongodb, SiGooglecloud, SiFirebase, SiPostman
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { AiOutlineApi } from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
const roles = ["AI/ML Researcher", "Python Developer", "Full-Stack Developer", "Data Scientist"];

const App = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) observer.observe(counterRef.current);
      return () => observer.disconnect();
    }, [end, duration, isVisible]);

    return (
      <span ref={counterRef} className="text-6xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
    );
  };

  // Code Animation Component
  const CodeBlock = ({ delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-gray-700/50"
    >
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-purple-400">const</div>
      <div className="text-blue-400">function</div>
      <div className="text-green-400">return</div>
    </motion.div>
  );

  const projects = [
    {
      id: 1,
      title: "MPox Hybrid Ensemble Model",
      description: "Advanced CNN ensemble using VGG, ResNet, DenseNet, and Xception architectures for medical image classification with 91% accuracy and Grad-CAM interpretability.",
      tech: ["Python", "TensorFlow", "CNN", "Grad-CAM", "Medical AI"],
      github: "https://github.com/KapurShatakshi/MPox-Ensemble-Model",
      category: "AI/ML Research",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Image Generator",
      description: "Scalable web application leveraging Stable Diffusion for real-time AI image generation with Flask backend and JavaScript frontend integration.",
      tech: ["Stable Diffusion", "Flask", "JavaScript", "GCP", "AI"],
      github: "https://github.com/KapurShatakshi/AI-Image-Generator",
      category: "Web Applications",
      featured: true
    },
    {
      id: 3,
      title: "Gesture-Based Calculator",
      description: "Computer vision application using OpenCV for real-time hand gesture recognition with 90%+ accuracy for arithmetic operations.",
      tech: ["OpenCV", "Python", "Computer Vision", "Real-time Processing"],
      github: "https://github.com/KapurShatakshi/Gesture-Calculator",
      category: "Computer Vision",
      featured: true
    },
    {
      id: 4,
      title: "Skin Cancer Classification System",
      description: "Deep learning pipeline using transfer learning with ResNet50 and InceptionV3 for malignant vs benign skin lesion classification.",
      tech: ["PyTorch", "ResNet50", "InceptionV3", "Transfer Learning"],
      github: "https://github.com/KapurShatakshi/Skin-Cancer-Classifier",
      category: "Medical AI",
      featured: false
    },
    {
      id: 5,
      title: "Scalable Image Classification System",
      description: "Production-ready image classification pipeline with ResNet and EfficientNet achieving 85% accuracy with mobile and web integration.",
      tech: ["ResNet", "EfficientNet", "TensorFlow", "Scalable Architecture"],
      github: "https://github.com/KapurShatakshi/Image-Classification-System",
      category: "Enterprise AI",
      featured: false
    }
  ];

  const certifications = [
    {
      title: "Generative AI Engineering Professional Certificate",
      organization: "IBM (Coursera)",
      date: "Ongoing",
      description: "Industry-recognized certification in advanced generative AI engineering and implementation."
    },
    {
      title: "Gold Badges - Python, C, Problem Solving",
      organization: "HackerRank",
      date: "2024",
      description: "Achieved gold-level proficiency in Python programming, C programming, and algorithmic problem solving."
    },
    {
      title: "Silver Badge - C++",
      organization: "HackerRank", 
      date: "2024",
      description: "Demonstrated advanced C++ programming skills and object-oriented programming concepts."
    },
    {
      title: "Multiple Technology Certifications",
      organization: "Infosys Springboard",
      date: "2024",
      description: "Certified in SQL, DBMS, HTML5, CSS3, JavaScript, and AI Ethics fundamentals."
    }
  ];

  const skills = {
    "Programming Languages": [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C/C++", icon: <MdComputer className="text-blue-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      { name: "SQL", icon: <DiDatabase className="text-orange-400" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" /> }
    ],
    "AI & Machine Learning": [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "Keras", icon: <SiKeras className="text-red-600" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-green-500" /> },
      { name: "CNN", icon: <MdComputer className="text-purple-400" /> },
      { name: "NLP", icon: <MdComputer className="text-blue-500" /> }
    ],
    "Cloud & DevOps": [
      { name: "Google Cloud Platform", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "REST APIs", icon: <AiOutlineApi className="text-green-400" /> }
    ],
    "Databases": [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
    ],
    "Web Technologies": [
      { name: "Flask", icon: <MdComputer className="text-gray-400" /> },
      { name: "FastAPI", icon: <MdComputer className="text-green-500" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> }
    ],
    "Tools & Others": [
      { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Linux", icon: <FaLinux className="text-black" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Shatakshi Kapur
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
            >
              ☰
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {['Home', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative pt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, gray 2px, transparent 0), 
                              radial-gradient(circle at 75px 75px, gray 2px, transparent 0)`,
            backgroundSize: '100px 100px',
            opacity: 0.1
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Shatakshi Kapur
              </motion.h1>
              
              <motion.div
                className="text-xl md:text-2xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span>Engineering intelligent systems from</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-blue-400">code</span>
                  <span>to</span>
                  <span className="text-purple-400">cloud</span>
                  <span>through</span>
                  <span className="text-green-400">AI</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-4 mb-8 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a href="mailto:2k22.csaiml.2213484@gmail.com" className="hover:text-white transition-colors">
                  2k22.csaiml.2213484@gmail.com
                </a>
                <span>•</span>
                <a href="https://linkedin.com/in/shatakshi-kapur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/shatakshi-kapur
                </a>
                <span>•</span>
                <a href="https://github.com/KapurShatakshi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/KapurShatakshi
                </a>
                <span>•</span>
                <span>Kanpur, Uttar Pradesh, India</span>
              </motion.div>

              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </div>

            {/* Right Content - Code Blocks */}
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <CodeBlock key={index} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              &lt; Achievements Gallery /&gt;
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { label: "Certifications", value: 10, suffix: "+" },
              { label: "Research Projects", value: 5, suffix: "+" },
              { label: "Top % in LeetCode", value: 14.58, suffix: "%" },
              { label: "Years of Experience", value: 2, suffix: "+" },
              { label: "Live Projects", value: 8, suffix: "+" },
              { label: "Model Accuracy", value: 91, suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                />
                <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              &lt; Skills &amp; Technologies /&gt;
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, techList], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-4">{category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techList.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 flex items-center space-x-3"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    >
                      <div className="text-2xl">{tech.icon}</div>
                      <span className="text-white font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              &lt; Featured Projects /&gt;
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <span className="text-blue-400 text-sm">{project.category}</span>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View on GitHub
                    </motion.a>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-700/50 text-white px-4 py-2 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Projects Button */}
          <div className="text-center mt-12">
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              &lt; Certifications &amp; Achievements /&gt;
            </h2>
            <p className="text-gray-400 text-xl">
              Professional certifications and achievements that have shaped my development journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-blue-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                  <span className="text-blue-400 text-sm">{cert.date}</span>
                </div>
                <p className="text-purple-400 font-medium mb-3">{cert.organization}</p>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              &lt; Get in Touch /&gt;
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always open to discussing new AI/ML projects, research opportunities, 
                  or innovative ideas in artificial intelligence and data science.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-blue-400 text-xl" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-1">Phone</h4>
                      <p className="text-white">+91 95597 68566</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-400 text-xl" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-1">Email</h4>
                      <a href="mailto:2k22.csaiml.2213484@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        2k22.csaiml.2213484@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-1">Location</h4>
                      <p className="text-white">Kanpur, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 mt-8">
                  <motion.a
                    href="https://github.com/KapurShatakshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-white text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/shatakshi-kapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </motion.a>
                  <motion.a
                    href="mailto:2k22.csaiml.2213484@gmail.com"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope className="text-white text-xl" />
                  </motion.a>
                </div>
              </motion.div>

              {/* ... rest of your contact form code ... */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Shatakshi Kapur. Engineering the future with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
