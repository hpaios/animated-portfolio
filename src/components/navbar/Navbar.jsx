import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <motion.a
            href="https://www.linkedin.com/in/hanna-paios-704710185/"
            initial={{scale: 1}}
            whileHover={{scale:1.2}}
            transition={{duration: 0.5}}
            target="_blank">
              <img src="/inkedin_32.png" alt="logo"/>
          </motion.a>
          <motion.a
            href="https://github.com/hpaios"
            initial={{scale: 1}}
            whileHover={{scale:1.2}}
            transition={{duration: 0.5}}
            target="_blank">
              <img src="/github_32.png" alt="logo"/>
            </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
