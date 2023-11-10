import React, { useState } from 'react';
import './css/AudioSearch.css'
import { FaMicrophone, FaStop } from 'react-icons/fa';

function AudioSearch(){
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();

    recognition.onresult = (event) => {
      console.log(event.results,'audio')
      const currentTranscript = event.results[0][0].transcript;
      setTranscript(currentTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
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
        <button onClick={isListening ? stopListening : startListening}>
          {isListening ? <FaStop /> : <FaMicrophone />}
        </button>
      </div>
    </div>
  );
};
    
    export default AudioSearch;
    