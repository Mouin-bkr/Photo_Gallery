import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Footer from './comps/footer';
import "./index.css"

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      

      <Title/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
