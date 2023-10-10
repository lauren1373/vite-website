import { SectionWrapper } from "../hoc"
import { styles } from "../styles"

const Skills = () => {
    return (
        <div>
            <h2 className={styles.sectionHeadText}>Skills</h2>
        </div>
    )
}

export default SectionWrapper(Skills, "skills")