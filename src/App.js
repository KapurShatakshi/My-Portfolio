

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Home, User, Briefcase, BookOpen, Award, Code, Mail, Linkedin, Github, FileText, Download, ExternalLink, Sun, Moon, Link as LinkIcon, Menu, X, BarChart, Terminal, Lightbulb, Brain, Cloud, Package, Palette, PenTool, Git } from 'lucide-react';

// Helper function to simulate navigation
const navigate = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

// Custom Hook for animated section visibility
const useAnimatedSection = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  });

  return [ref, animationProps];
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProjectDetail, setShowProjectDetail] = useState(null); // State for showing project detail
  const [projectFilter, setProjectFilter] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const projects = [
    {
      id: 'ai-image-generator',
      category: 'Web Apps',
      title: 'AI-Based Image Generator',
      tagline: 'Scalable AI-driven image generation with Stable Diffusion',
      problem: 'The need for a web-based application that can generate images using advanced AI models and provide real-time user feedback.',
      stack: ['Stable Diffusion', 'Flask', 'JavaScript', 'GCP'],
      achievements: [
        'Designed and deployed a scalable AI-driven image generation web application using Stable Diffusion.',
        'Built real-time user input-output feedback loops by integrating Flask backend with JavaScript frontend.'
      ],
      github: 'https://github.com/KapurShatakshi/AI-Image-Generator',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=AI+Image+Gen+Demo',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=AI+Image+Gen+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=AI+Image+Gen+Screenshot+2'
      ]
    },
    {
      id: 'gesture-calculator',
      category: 'ML Models',
      title: 'Gesture-Based Calculator',
      tagline: 'Real-time gesture control with OpenCV',
      problem: 'Traditional calculators require physical input. A gesture-based system offers a hands-free and intuitive alternative.',
      stack: ['OpenCV', 'Python', 'Real-Time Processing'],
      achievements: [
        'Developed a real-time, gesture-controlled calculator using OpenCV, achieving over 90% gesture recognition accuracy.',
        'Implemented an image processing pipeline to detect hand movements and map them to arithmetic operations.'
      ],
      github: 'https://github.com/KapurShatakshi/Gesture-Calculator',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=Gesture+Calc+Demo',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=Gesture+Calc+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=Gesture+Calc+Screenshot+2'
      ]
    },
    {
      id: 'image-classification-system',
      category: 'Research',
      title: 'Image Classification System',
      tagline: 'Deep learning pipeline with ResNet & EfficientNet',
      problem: 'Efficient and accurate classification of images using state-of-the-art deep learning architectures.',
      stack: ['CNN', 'ResNet', 'EfficientNet', 'Scalable Deployment'],
      achievements: [
        'Deployed a deep learning classification pipeline achieving 85% accuracy using ResNet and EfficientNet architectures.',
        'Designed a scalable, modular architecture suitable for integration with mobile and web-based platforms.'
      ],
      github: 'https://github.com/KapurShatakshi/Image-Classification-System',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=Image+Class+Demo',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=Image+Class+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=Image+Class+Screenshot+2'
      ]
    },
    {
      id: 'mpox-ensemble-model',
      category: 'Research',
      title: 'MPox Hybrid Ensemble Model',
      tagline: '91% accuracy in MPox skin lesion classification',
      problem: 'Accurate and interpretable classification of MPox skin lesions for clinical decision support.',
      stack: ['CNN Ensemble', 'VGG', 'ResNet', 'DenseNet', 'Xception', 'Grad-CAM'],
      achievements: [
        'Developed a hybrid CNN ensemble using VGG, ResNet, DenseNet, and Xception for MPox skin lesion classification, achieving 91% test accuracy.',
        'Integrated Grad-CAM heatmaps for medical interpretability and clinical decision validation.'
      ],
      github: 'https://github.com/KapurShatakshi/MPox-Ensemble-Model',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=MPox+Model+Demo',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=MPox+Model+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=MPox+Model+Screenshot+2'
      ]
    },
    {
      id: 'skin-cancer-classification',
      category: 'Research',
      title: 'Skin Cancer Image Classification',
      tagline: 'Deep learning for malignant vs. benign skin lesions',
      problem: 'Accurate differentiation between malignant and benign skin lesions using deep learning to assist dermatologists.',
      stack: ['CNNs', 'ResNet50', 'InceptionV3', 'Data Augmentation'],
      achievements: [
        'Designed a deep learning pipeline using pre-trained CNNs (ResNet50, InceptionV3) to classify malignant vs. benign skin lesions.',
        'Enhanced generalization with data augmentation and class-balanced dataset strategies.'
      ],
      github: 'https://github.com/KapurShatakshi/Skin-Cancer-Classifier',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=Skin+Cancer+AI+Demo',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=Skin+Cancer+AI+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=Skin+Cancer+AI+Screenshot+2'
      ]
    },
  ];


  const filteredProjects = projectFilter === 'All' ? projects : projects.filter(p => p.category === projectFilter);

  const renderContent = () => {
    if (showProjectDetail) {
      const project = projects.find(p => p.id === showProjectDetail);
      if (!project) return null;

      return (
        <div className="container mx-auto px-4 py-8 dark:text-white">
          <button
            onClick={() => setShowProjectDetail(null)}
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            &larr; Back to Projects
          </button>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.tagline}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">{project.problem}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm dark:bg-gray-700 dark:text-gray-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Key Achievements & Metrics</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-200 space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Screenshots / Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((src, index) => (
                <img key={index} src={src} alt={`${project.title} Screenshot ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover" />
              ))}
              {project.demo && (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg dark:bg-gray-700">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                    <ExternalLink size={48} /> <span className="block mt-2">View Demo Video</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <Github size={20} /> GitHub Repo
                </a>
              )}
              {/* Add more links like paper DOI, live site if available */}
            </div>
          </div>
        </div>
      );
    }

    return (
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500 relative overflow-hidden">
          {/* Background Particles/Animation */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="particle-container">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="particle" style={{
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  backgroundColor: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`,
                  boxShadow: `0 0 ${2 + Math.random() * 5}px rgba(0, 191, 255, 0.8)`
                }}></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <animated.h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">Shatakshi Kapur</animated.h1>
            <animated.p className="text-xl md:text-3xl mb-8 animate-fade-in-up">AI Enthusiast & Full-Stack Developer</animated.p>
            <animated.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in">
              <a
                href="Shatakshi_Kapur_Resume_Google.pdf" // Direct link to uploaded resume
                download="Shatakshi_Kapur_Resume_Google.pdf"
                className="flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold"
              >
                <Download className="mr-2" size={20} /> Download CV
              </a>
              <button
                onClick={() => navigate('projects')}
                className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition duration-300 text-lg font-semibold"
              >
                <Briefcase className="mr-2" size={20} /> View Projects
              </button>
            </animated.div>
            <animated.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">450+</h3>
                <p className="text-lg">LeetCode Problems Solved</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">14.58%</h3>
                <p className="text-lg">Global Contest Ranking</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">8.09/10</h3>
                <p className="text-lg">Current Semester GPA</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">2+</h3>
                <p className="text-lg">Research Projects</p>
              </div>
            </animated.div>
          </div>
        </section>

        {/* About Me Section */}
        <Section id="about" title="About Me" className="bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://placehold.co/300x300/e0e0e0/333333?text=Profile+Photo"
                alt="Shatakshi Kapur"
                className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400 dark:border-purple-400"
              />
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              <p className="mb-4">
                Hello! I'm Shatakshi Kapur, an AI enthusiast with experience in scalable ML systems, distributed computing, and cloud-integrated solutions. I am passionate about leveraging cutting-edge technologies to solve real-world problems and create impactful applications.
              </p>
              <p className="mb-4">
                My mission is to contribute to the advancement of AI and machine learning, focusing on building intelligent systems that are not only efficient and accurate but also transparent and interpretable. I thrive in environments that challenge me to learn and innovate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div><span className="font-semibold text-gray-900 dark:text-white">Location:</span> Kanpur, Uttar Pradesh, India</div>
                <div><span className="font-semibold text-gray-900 dark:text-white">Email:</span> 2k22.csaiml.2213484@gmail.com</div>
                <div><span className="font-semibold text-gray-900 dark:text-white">LinkedIn:</span> linkedin.com/in/shatakshi-kapur</div>
                <div><span className="font-semibold text-gray-900 dark:text-white">GitHub:</span> github.com/KapurShatakshi</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" className="bg-white dark:bg-gray-900">
          <div className="relative border-l-4 border-blue-500 dark:border-purple-500 pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-blue-500 dark:bg-purple-500 rounded-full -left-10 top-1.5 border-4 border-white dark:border-gray-900"></div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Pranveer Singh Institute of Technology</p>
              <p className="text-md text-gray-500 dark:text-gray-400">Aug 2022 - April 2026 | Kanpur, Uttar Pradesh</p>
              <p className="text-md text-gray-500 dark:text-gray-400 mt-2">Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Computer Networks, DBMS, Compiler Design, Computer Architecture</p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" className="bg-gray-50 dark:bg-gray-800">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Technical Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
                { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
                { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
                { name: 'CNN', icon: 'https://placehold.co/48x48/000000/ffffff?text=CNN' },
                { name: 'NLP', icon: 'https://placehold.co/48x48/000000/ffffff?text=NLP' },
                { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
                { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-700">
                  {skill.icon.startsWith('http') ? (
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                  ) : (
                    <Code className="w-12 h-12 mb-2 text-blue-500 dark:text-purple-400" />
                  )}
                  <span className="text-gray-800 dark:text-white text-center font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Other Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Full-stack web development', 'ML pipelines', 'Scalable system design', 'CI/CD practices', 'Distributed Computing', 'Cybersecurity', 'REST APIs', 'Flask', 'FastAPI', 'Postman', 'Google Chrome', 'Google Ads'].map((skill, index) => (
                <span key={index} className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full shadow-md text-lg font-medium dark:bg-purple-200 dark:text-purple-900">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects & Case Studies" className="bg-white dark:bg-gray-900">
          <div className="flex justify-center mb-8 gap-4">
            {['All', 'Research', 'Web Apps', 'ML Models'].map(category => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300
                  ${projectFilter === category
                    ? 'bg-blue-600 text-white shadow-md dark:bg-purple-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                <img src={project.screenshots[0]} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-purple-200 dark:text-purple-900">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full dark:bg-gray-600 dark:text-gray-200">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setShowProjectDetail(project.id)}
                    className="mt-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Research & Publications Section */}
        <Section id="research" title="Research & Publications" className="bg-gray-50 dark:bg-gray-800">
          <div className="space-y-8">
            {/* Publication 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                MPox Hybrid Ensemble Model
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Role:</span> Lead Researcher | <span className="font-medium">Year:</span> Aug 2022 - April 2026
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
                <li>Developed a hybrid CNN ensemble using VGG, ResNet, DenseNet, and Xception for MPox skin lesion classification, achieving 91% test accuracy.</li>
                <li>Integrated Grad-CAM heatmaps for medical interpretability and clinical decision validation.</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/KapurShatakshi/MPox-Ensemble-Model" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                Skin Cancer Image Classification
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Role:</span> Lead Researcher | <span className="font-medium">Year:</span> Dec 2024 - Present
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
                <li>Designed a deep learning pipeline using pre-trained CNNs (ResNet50, InceptionV3) to classify malignant vs. benign skin lesions.</li>
                <li>Enhanced generalization with data augmentation and class-balanced dataset strategies.</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/KapurShatakshi/Skin-Cancer-Classifier" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Achievements & Awards Section */}
        <Section id="achievements" title="Achievements & Awards" className="bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">LeetCode Global Ranking</h3>
              <p className="text-gray-600 dark:text-gray-300">Solved 450+ LeetCode problems, demonstrating strong algorithmic and data structure skills. Achieved Global Contest Ranking in the Top 14.58%.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Programming Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">Gold Badges in Python, C, and Problem Solving. Silver Badge in C++. Certified in SQL, DBMS, HTML5, CSS3, JavaScript, and AI Ethics.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Generative AI Engineering Certification</h3>
              <p className="text-gray-600 dark:text-gray-300">Pursuing IBM's industry-recognized Generative AI Engineering Professional Certificate (Coursera).</p>
            </div>
          </div>
        </Section>

        {/* Experience Section (from resume) */}
        <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-800">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700 flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src="https://placehold.co/80x80/e0e0e0/333333?text=PSIT"
                alt="Pranveer Singh Institute of Technology Logo"
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Lead Researcher, MPox Hybrid Ensemble Model</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Pranveer Singh Institute of Technology</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-4">Aug 2022 - April 2026 | Kanpur, Uttar Pradesh</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                  <li>Developed a hybrid CNN ensemble using VGG, ResNet, DenseNet, and Xception for MPox skin lesion classification, achieving 91% test accuracy.</li>
                  <li>Integrated Grad-CAM heatmaps for medical interpretability and clinical decision validation.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700 flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src="https://placehold.co/80x80/e0e0e0/333333?text=PSIT"
                alt="Pranveer Singh Institute of Technology Logo"
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Lead Researcher, Skin Cancer Image Classification</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Pranveer Singh Institute of Technology</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-4">Dec 2024 - Present | Kanpur, Uttar Pradesh</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                  <li>Designed a deep learning pipeline using pre-trained CNNs (ResNet50, InceptionV3) to classify malignant vs. benign skin lesions.</li>
                  <li>Enhanced generalization with data augmentation and class-balanced dataset strategies.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Certifications & Courses Section */}
        <Section id="certifications" title="Certifications & Courses" className="bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <img
                src="https://placehold.co/80x80/e0e0e0/333333?text=HackerRank"
                alt="HackerRank Logo"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Programming Certifications (HackerRank)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Gold Badges in Python, C, and Problem Solving. Silver Badge in C++.</p>
              <a href="#" className="flex items-center justify-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                <LinkIcon size={18} /> View Credentials
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <img
                src="https://placehold.co/80x80/e0e0e0/333333?text=Infosys"
                alt="Infosys Logo"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Infosys Springboard Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Certified in SQL, DBMS, HTML5, CSS3, JavaScript, and AI Ethics.</p>
              <a href="#" className="flex items-center justify-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                <LinkIcon size={18} /> View Credentials
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
              <img
                src="https://placehold.co/80x80/e0e0e0/333333?text=IBM"
                alt="IBM Logo"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Generative AI Engineering Certification (IBM/Coursera)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Pursuing IBM's industry-recognized Generative AI Engineering Professional Certificate.</p>
              <a href="#" className="flex items-center justify-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                <LinkIcon size={18} /> View Credentials
              </a>
            </div>
          </div>
        </Section>

        {/* Document Vault Section */}
        <Section id="vault" title="Document Vault" className="bg-gray-50 dark:bg-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Latest Resume', link: 'Shatakshi_Kapur_Resume_Google.pdf' }, // Direct link to uploaded resume
              { name: 'LeetCode Profile', link: 'https://leetcode.com/KapurShatakshi/' },
              { name: 'HackerRank Profile', link: 'https://www.hackerrank.com/KapurShatakshi' },
              { name: 'GitHub Profile', link: 'https://github.com/KapurShatakshi' },
            ].map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between dark:bg-gray-700">
                <span className="text-lg font-medium text-gray-800 dark:text-white">{doc.name}</span>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-purple-400 dark:hover:text-purple-600">
                  <ExternalLink size={24} />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
              Bulk Download All
            </button>
          </div>
        </Section>

        {/* Blog / Writing Section (Placeholder) */}
        <Section id="blog" title="Blog / Writing" className="bg-white dark:bg-gray-900">
          <div className="text-center text-gray-700 dark:text-gray-200">
            <p className="mb-4 text-lg">
              Stay tuned for insightful articles on AI, Machine Learning, Data Structures, and Career Tips!
            </p>
            <p className="text-md">
              This section will feature my thoughts, tutorials, and deep dives into technical topics.
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
              Explore Blog Posts
            </button>
          </div>
        </Section>

        {/* Speaking / Workshops Section (Placeholder) */}
        <Section id="speaking" title="Speaking / Workshops" className="bg-gray-50 dark:bg-gray-800">
          <div className="text-center text-gray-700 dark:text-gray-200">
            <p className="mb-4 text-lg">
              Details about my past and upcoming speaking engagements and workshops will appear here.
            </p>
            <p className="text-md">
              Topics include Explainable AI, Federated Learning, and Full-Stack Development.
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
              View Event Gallery
            </button>
          </div>
        </Section>

        {/* Testimonials Section (Placeholder) */}
        <Section id="testimonials" title="Testimonials" className="bg-white dark:bg-gray-900">
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center dark:bg-gray-800">
              <p className="text-xl italic text-gray-700 dark:text-gray-200 mb-6">
                "Shatakshi is an exceptionally talented and dedicated individual. Her enthusiasm for AI and her strong technical skills make her a valuable asset to any project. She consistently delivers high-quality work with a keen eye for detail."
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">- [Name/Title of Recommender]</p>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact Me" className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 dark:bg-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect with me:</h3>
              <div className="flex justify-center gap-6">
                <a href="https://linkedin.com/in/shatakshi-kapur" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                  <Linkedin size={36} />
                </a>
                <a href="https://github.com/KapurShatakshi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                  <Github size={36} />
                </a>
                <a href="https://leetcode.com/KapurShatakshi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                  <Code size={36} /> {/* LeetCode Icon */}
                </a>
                <a href="https://www.hackerrank.com/KapurShatakshi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                  <Terminal size={36} /> {/* HackerRank Icon */}
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
    );
  };

  // Section component to apply animations
  const Section = ({ id, title, children, className = '' }) => {
    const [ref, animationProps] = useAnimatedSection();
    return (
      <animated.section id={id} ref={ref} style={animationProps} className={`py-20 transition-colors duration-500 ${className}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{title}</h2>
          {children}
        </div>
      </animated.section>
    );
  };

  return (
    <div className={`font-inter min-h-screen flex flex-col bg-gray-900 text-white ${darkMode ? 'dark' : ''}`}>
      {/* Global Header / Sticky Nav Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:shadow-lg transition-colors duration-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Text logo for Shatakshi Kapur */}
          <div className="text-2xl font-bold text-blue-600 dark:text-purple-400">Shatakshi Kapur</div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Home size={18} /> Home
            </button>
            <button onClick={() => { navigate('about'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <User size={18} /> About
            </button>
            <button onClick={() => { navigate('skills'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Code size={18} /> Skills
            </button>
            <button onClick={() => { navigate('projects'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Briefcase size={18} /> Projects
            </button>
            <button onClick={() => { navigate('experience'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <BookOpen size={18} /> Experience
            </button>
            <button onClick={() => { navigate('education'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Award size={18} /> Education
            </button>
            <button onClick={() => { navigate('achievements'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Award size={18} /> Achievements
            </button>
            <button onClick={() => { navigate('contact'); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Mail size={18} /> Contact
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Mobile menu button (Hamburger icon) */}
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 transition-all duration-300 ease-in-out">
            <button onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Home size={18} /> Home</button>
            <button onClick={() => { navigate('about'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><User size={18} /> About</button>
            <button onClick={() => { navigate('skills'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Code size={18} /> Skills</button>
            <button onClick={() => { navigate('projects'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Briefcase size={18} /> Projects</button>
            <button onClick={() => { navigate('experience'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><BookOpen size={18} /> Experience</button>
            <button onClick={() => { navigate('education'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Award size={18} /> Education</button>
            <button onClick={() => { navigate('achievements'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Award size={18} /> Achievements</button>
            <button onClick={() => { navigate('contact'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"><Mail size={18} /> Contact</button>
          </div>
        )}
      </header>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 dark:bg-gray-950 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Shatakshi Kapur. All rights reserved.</p>
          <p className="text-sm text-gray-400 mb-4">Last Updated: July 2025</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#home" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
          </div>
          <p className="text-sm text-gray-500">Built with ❤️ using React + Tailwind CSS</p>
        </div>
      </footer>

      {/* Global Styles for Particles and Animations */}
      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }

        .particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          animation: particle-move linear infinite;
        }

        @keyframes particle-move {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--random-x) * 100px)) scale(0.5);
            opacity: 0;
          }
        }

        /* Responsive adjustments for particle animation */
        @media (max-width: 768px) {
          .particle {
            animation: particle-move-mobile linear infinite;
          }
          @keyframes particle-move-mobile {
            0% {
              transform: translateY(0) translateX(0) scale(0.8);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-50vh) translateX(calc(var(--random-x) * 50px)) scale(0.3);
              opacity: 0;
            }
          }
        }

        /* Fade-in-down animation for hero text */
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        /* Fade-in-up animation for hero text */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.3s; /* Delay for sequential animation */
        }

        /* General fade-in animation */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          animation-delay: 0.6s; /* Delay for sequential animation */
        }
      `}</style>
    </div>
  );
};

export default App;

