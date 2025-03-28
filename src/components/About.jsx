import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img
                src={profilePic}
                alt="Rakshith Sridhar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6">
              Hi, I'm Rakshith Sridhar, a passionate developer with a keen interest in creating
              elegant and efficient solutions. I specialize in web development and enjoy
              working with modern technologies to build responsive and user-friendly
              applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge with the developer community.
              I believe in continuous learning and staying up-to-date with the latest industry
              trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;