import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; 
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { experiences } from '../constants';
import { styles } from '../styles'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#fff5d6', color: '#130e01' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-text text-[24px] font-bold">{experience.title}</h3>
        <p 
          className="text-text text-[16px] font-semibold" 
          style={{ margin: 0 }}
        >{experience.company_name}</p>
      </div>
  
      <ul className="text-text mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`}
            className="text-text text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Timeline</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience")