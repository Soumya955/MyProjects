import React, { useEffect, useRef, useState } from 'react';

export default function ExpRef() {
    const inputRef = useRef(null);
    const [text, setText] = useState('');
  
    const handleButtonClick = () => {
      const inputValue = inputRef.current.focous
      setText(`You entered: ${inputValue}`);
    };
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Submit</button>
        <p>{text}</p>
      </div>
    );
  };



