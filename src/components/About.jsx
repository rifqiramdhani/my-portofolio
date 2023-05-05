import React from 'react'
import { motion} from 'framer-motion'
import { styles} from '../styles'
import { services } from "../constants";
import { fadeIn, textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full bg-gradient-to-r from-[#ff3622] to-[#22ff3f] p-[1px] rounded-[20px] shadow-card"
        >
          <div
            option={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] pt-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a backend developer with 3 years of experience in building and
        managing server infrastructure, databases, and APIs for web
        applications. In the last 3 months, I have also attended a full-stack
        developer bootcamp where I have deepened my knowledge and skills in web
        application development from both the frontend and backend perspectives.
        Additionally, I learned about teamwork, collaboration, and project
        management. The combination of my experience as a backend developer and
        a full-stack developer has enabled me to develop more effective and
        efficient web applications in the future.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 transition ">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");