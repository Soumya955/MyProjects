import React, { useState } from 'react';
import './css/AudioSearch.css'
import { FaMicrophone, FaStop } from 'react-icons/fa';

function AudioSearch(){
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();

  const startListening = () => {
    setIsListening(true);

    recognition.onresult = (e) => {
      console.log(e.results,'audio')
      const currentTranscript = e.results[0][0].transcript;
      setTranscript(e.results[0][0].transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div>
      <label>Search using voice:</label>
      <div>
        <input
          type="text"
          value={transcript}
          placeholder="Speak..."
          readOnly
        />
        <button onClick={()=>{isListening ? stopListening() : startListening()}}>
          {isListening ? <FaStop /> : <FaMicrophone />}
        </button>
      </div>
    </div>
  );
};
    
    export default AudioSearch;
    