import {motion} from 'framer-motion'

const ToggleButton = ({setOpen}) => {
  return(
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="23" height="23" viewBox='0 0 23 23'>
        <motion.path
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          open: {d:"M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"},
          closed: {d:"M3 6.00092H21M3 12.0009H21M3 18.0009H21"}
        }}></motion.path>
      </svg>
    </button>
  )
}

export default ToggleButton;
