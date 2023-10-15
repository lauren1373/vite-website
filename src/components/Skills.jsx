import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { skill_list } from "../constants"
import { useMediaQuery } from 'react-responsive'
import Tilt from 'react-parallax-tilt'
import React from "react"

const SkillsCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full p-[1px] rounded-[20px] bg-accent"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1, 
                        speed: 450
                    }}
                    className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-30 h-20 sm:w-20 sm:h-20 object-contain"/>
                    <h3>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const SkillsCard2 = ({ index, title, icon }) => {
    return (
        <Tilt className="w-full">
            <motion.div
                className="w-full p-[1px] rounded-[20px] bg-accent my-5"
            >
                <div
                    options={{
                        max: 10,
                        scale: 1, 
                        speed: 450
                    }}
                    className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-30 h-20 sm:w-20 sm:h-20 object-contain"/>
                    <h3>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const Skills = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 680px)' })
    const isNotMobile = useMediaQuery({ query: '(min-width: 681px)' })

    return (
        <>

            {isNotMobile &&
                <motion.div variants={textVariant()}>
                    <div className={styles.sectionHeadText}>Skills</div>
                </motion.div>
            }

            {isMobile &&
                <div className={styles.sectionHeadText}>Skills</div>
            }

            {isMobile &&
                <div className="mt-10 flex flex-col">
                    {skill_list.map((skill, index) => (
                    <SkillsCard2 key={skill.title} index={index} {...skill} />
                    ))}
                </div>
            }

            {isNotMobile &&
                <div className="mt-10 flex flex-wrap gap-10">
                {skill_list.map((skill, index) => (
                    <SkillsCard key={skill.title} index={index} {...skill} />
                ))}
                </div>
            }

        </>
    )
}

export default SectionWrapper(Skills, "skills")