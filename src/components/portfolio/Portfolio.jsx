import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import companies from './../../../data/companies'
import './portfolio.scss'
import { useRef } from 'react'

const Portfolio = () => {
  
  const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
      target: ref,
    })

    const y = useTransform(scrollYProgress, [0,1],[300,-300]);

    return(
      <section> 
        <div className="container">
          <div className="wrapper">
           <div className="imageContainer" ref={ref}>
            <motion.a
              href={item.link}
              target='_blank'
              rel="noreferrer"
              initial={{scale: 1}}
              whileHover={{scale:1.2}}
              transition={{duration: 0.5}}
            >
              <img src={item.img} alt="" />
            </motion.a>
           </div>
            <motion.div className="textContainer" style={y}>
              <h2>{item.title}</h2>
              <h3>Duration:&nbsp;<span>{item.duration}</span></h3>
              <h3>Responsibility:</h3>
              <ul>
                {item.responsibility.map(res => {
                  return <li key={res}>{res}</li>
                })}
              </ul>
              <h3>Tech stack:</h3>
              <ul>
                {item.tech.map(tech => {
                  return <li key={tech}>{tech}</li>
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return(
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Work experience</h1>
        <motion.div className="progressBar" style={{scaleX}}></motion.div>
      </div>
      {companies.map(item => <Single item={item} key={item.id}/>)}
    </div>
  )
}

export default Portfolio;
