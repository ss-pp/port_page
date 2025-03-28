import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleBackground from './components/ParticleBackground';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' }
  ];

  const experiences = [
    {
      company: 'American Axles Manufacturing',
      role: 'Intern',
      link: 'https://drive.google.com/file/d/16C-55-qN5e30NnSy1ReGh2WSkKlNVeSK/view'
    },
    {
      company: 'Securden',
      role: 'Intern',
      link: 'https://drive.google.com/file/d/1QKJTv9QDnh3RTwTfy9MjlUksZWxdJJqf/view'
    }
  ];

  const projects = [
    {
      name: 'Image Captioning using Transformer Architecture',
      description: 'Developed a sophisticated image captioning system using pretrained transformer models trained on Flickr and MS COCO datasets. Improved accuracy from 82% to 94% through data augmentation, implemented voice features for caption reading, and added explainability techniques for highlighting relevant image regions.',
      link: 'https://drive.google.com/file/d/1HscWBMf-94Fo6yIFR5HhTwZ2ZBkMnJqL/view',
      date: 'Oct 2024 - Present',
      skills: ['Transformer Models', 'Data Analysis', 'Machine Learning', 'Python', 'Model Tuning']
    },
    {
      name: 'Hotel Reservation Cancellation Prediction',
      description: 'Implemented a logistic regression model to predict hotel reservation cancellations by analyzing cancellation factors. The system provides insights for hospitality management to minimize cancellations, optimize operations, and enhance customer satisfaction through data-driven decision making. Please check LinkedIn for the research paper.',
      link: 'https://www.linkedin.com/in/rakshith-sridhar-036a3b23a',
      date: 'Apr 2023 - Jul 2023',
      skills: ['Machine Learning Algorithms', 'Logistic Regression', 'Data Analysis', 'Predictive Modeling']
    },
    {
      name: 'IoT Night Patrolling Bot',
      description: 'Designed and developed an IoT-based autonomous night patrolling system following IEEE standards. The project encompasses various hardware components and intelligent monitoring capabilities for enhanced security surveillance. Please check LinkedIn for the research paper.',
      link: 'https://www.linkedin.com/in/rakshith-sridhar-036a3b23a',
      date: 'Apr 2023 - May 2023',
      skills: ['Internet of Things (IoT)', 'Computer Hardware', 'SAS (Software)', 'Embedded Systems']
    },
    {
      name: 'AI Chatbot',
      description: 'Developed an intelligent chatbot application',
      link: 'https://github.com/ss-pp/chatbot'
    },
    {
      name: 'Travel Planner',
      description: 'Created a comprehensive travel planning application',
      link: 'https://github.com/ss-pp/travel-2'
    }
  ];

  const certificates = [
    {
      name: 'Intermediate Machine Learning',
      issuer: 'Kaggle',
      link: 'https://www.kaggle.com/learn/certification/rakshitht/intermediate-machine-learning'
    },
    {
      name: 'Python Course',
      issuer: 'IIT',
      link: 'https://drive.google.com/file/d/1THSDkzLwAul8JJct_ie_jePhLMvBG64J/view'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-677222b0-f5e6-4e28-9dab-cbff61ca1955/'
    },
    {
      name: 'Mastering AI ML with Cybersecurity',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-824ed56c-83b9-4d05-a73a-906a4c130282/'
    }
  ];

  const skills = [
    'Machine Learning',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'SQL',
    'Data Analysis',
    'Web Development',
    'Cybersecurity',
    'C',
    'C++',
    'Java',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Data Visualization',
    'IOT',
    'Marketing',
    'Content Creation'
  ];

  return (
    <div className="min-h-screen bg-primary">
      <ParticleBackground />
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-textLight">Rakshith Sridhar</h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-textLight mb-4 hero-name">
               Rakshith Sridhar
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A passionate developer focused on Machine Learning and Web Development
            </p>
            <a href="https://www.linkedin.com/in/rakshith-sridhar-036a3b23a" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 px-4 section-gradient section-transition">
        <div className="container mx-auto relative z-10">
          <h2 className="section-title">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-64 h-64 rounded-full overflow-hidden border-12 border-secondary shadow-lg mb-6 md:mb-0 md:mr-12 md:ml-8">
              <img
                src="https://ss-pp.github.io/site-personel/beach.jpg"
                alt="Rakshith Sridhar"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <p className="text-lg mb-6">
                I'm an undergraduate student pursuing Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. As a business enthusiast and software developer, I combine technical expertise with a strong understanding of business needs.
              </p>
              <p className="text-lg mb-6">
                My experience spans building machine learning models integrated with cybersecurity technologies, showcasing my ability to work at the intersection of AI and security. I'm also proficient in full-stack web development, utilizing technologies like HTML, CSS, Bootstrap, JavaScript, Node.js, React, and Django to create comprehensive web solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 section-gradient section-transition">
        <div className="container mx-auto">
          <h2 className="section-title">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-textLight mb-2">{exp.company}</h3>
                <p className="mb-4">{exp.role}</p>
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-tertiary/30 section-gradient section-transition">
        <div className="container mx-auto">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-textLight mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                {project.date && <p className="text-sm text-textBase mb-2">{project.date}</p>}
                {project.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-quaternary/50 px-2 py-1 rounded text-textLight">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 section-gradient section-transition">
        <div className="container mx-auto">
          <h2 className="section-title">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-textLight mb-2">{cert.name}</h3>
                <p className="mb-4">Issued by {cert.issuer}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-tertiary/30 section-gradient section-transition">
        <div className="container mx-auto">
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-quaternary px-4 py-2 rounded-full text-textLight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 section-gradient section-transition">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me on social media!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/rakshith.sridhar.56"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaFacebook className="text-xl social-icon" />
              Connect on Facebook
            </a>
            <a
              href="https://www.instagram.com/_rakshithxx_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaInstagram className="text-xl social-icon" />
              Follow on Instagram
            </a>
            <a
              href="https://x.com/SridharRakshith?t=6Eq08VNFyDjTAWcqGDbhfA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaXTwitter className="text-xl social-icon" />
              Follow on Twitter
            </a>
            <a
              href="https://github.com/ss-pp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub className="text-xl social-icon" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
