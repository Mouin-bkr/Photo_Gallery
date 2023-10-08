import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" 
    onClick={handleClick}
    initial={{ opacity: 0, scale: 0.8 }} // Initial state: fully transparent, slightly scaled down
    animate={{ opacity: 1, scale: 1 }} // Animated state: fully visible, normal scale
    transition={{ duration: 0.3 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
         initial={{ opacity: 0 }} // Initial state: fully transparent
         animate={{ opacity: 1 }} // Animated state: fully visible
      />
    </motion.div>
  )
}

export default Modal;
