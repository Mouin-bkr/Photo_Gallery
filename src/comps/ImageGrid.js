import React from 'react';
import { motion } from 'framer-motion';

// Function to import all images from the 'pictures-hama' directory
const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../pictures-hama', false, /\.(jpg)$/));

const ImageGrid = ({ setSelectedImg }) => {
  return (
    <div className="img-grid">
      {images.map((url, index) => (
        <motion.div className="img-wrap" key={index} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(url)}
        >
          <motion.img src={url} alt={`image_${index}`} />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;
