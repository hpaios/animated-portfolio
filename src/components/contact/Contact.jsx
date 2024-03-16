import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react'

import './contact.scss'

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Contact = () => {

  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2zvtfpp', 'template_qaj74bf', formRef.current, {
        publicKey: 'cf8Gj_mjHyv4tu-R6',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return(
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let&lsquo;s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>annapaios90@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+38 098 89 90 758</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <motion.div className="phoneSvg" initial={{opacity: 1}} whileInView={{opacity: 0}} transition={{delay:2, duration:1}}>
          <img src="./mail.svg" alt="" />
        </motion.div>
        <motion.form ref={formRef} onSubmit={sendEmail}
          initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:3, duration:1}}> 
          <input type="text" required placeholder='Name' name="name"/>
          <input type="email" required placeholder='Email' name='email'/>
          <textarea rows="8" placeholder='Message' name='message'/>
          <button>Submit</button>
          {success && <span className="success">The mail has been sent successfully!</span>}
          {error && <span className="error">The mail has not been sent!</span>}
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact