import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [phrases] = useState(["Hi, I'm Chattely Mohamed", " Yoo,I'm an artist "]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const targetPhrase = phrases[currentPhraseIndex];
      let targetIndex = currentText.length;

      if (isDeleting) {
        targetIndex = currentText.length - 1;
      }

      const newText = isDeleting
        ? targetPhrase.substring(0, targetIndex)
        : targetPhrase.substring(0, targetIndex + 1);

      setCurrentText(newText);

      if (isDeleting && newText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) =>
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        );
      } else if (!isDeleting && newText === targetPhrase) {
        setIsDeleting(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div style={{ minHeight: '2em'}}>
  <h1>{currentText}</h1>
  </div>);
};

export default TypingAnimation;
