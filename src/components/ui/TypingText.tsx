
import React, { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1000,
  className
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);
  
  const textIndex = loopNum % texts.length;
  const fullText = texts[textIndex];
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isDeleting) {
      setTypingDelay(deletingSpeed);
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, typingDelay);
    } else {
      setTypingDelay(typingSpeed);
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingDelay);
    }
    
    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, fullText, typingDelay, typingSpeed, deletingSpeed, delayBetween]);
  
  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="typing-cursor">&nbsp;</span>
    </span>
  );
};

export default TypingText;
