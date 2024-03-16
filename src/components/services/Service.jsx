import {motion} from 'framer-motion'

import skills from '../../../data/skills'
import './service.scss'


const Service = () => {
  
  const variants = {
    initial: {
      x: -500,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  }

  return(
    <motion.div
      className='service'
      variants={variants}
      initial="initial"
      whileInView='animate'
    >
      <motion.div className="textContainer" variants={variants}>
        I focus on helping your brand grow <br /> and move forward
        <hr />
      </motion.div>
      <motion.div className="skillsContainer" variants={variants}>
        {skills.map(item => {
          return(
            <div className="skill" key={item.name}>
            <img src={`/${item.name}.svg`} alt={`${item.name}_logo`} />
            <span>{item.title}</span>
          </div>
          )
        })}
       </motion.div>
    </motion.div>
  )
}

export default Service
