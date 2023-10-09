import { styles } from "../styles"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionSubText}>Introduction</h2>
            </motion.div>

            <motion.p
                className="mt-4 text-text text-[17px] max-w-3xl leading-[30px]"
            >
                Lauren
            </motion.p>
        </>
    )
}

export default SectionWrapper(About, "about")