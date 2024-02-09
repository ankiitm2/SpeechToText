import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

function App() {
  const [listening, setListening] = useState(false);
  const {
    transcript,
    browserSupportsSpeechRecognition, resetTranscript
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    setListening(true)
  }

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
  }

  return (
    <div className="App">
      <div className="container m-8 flex flex-col m-auto mt-20">
        <h2 className="text-center font-medium text-4xl mb-2">Speech to Text</h2>
        <div className="main shadow text-2xl font-medium capitalize min-h-96 max-w-3xl w-full h-auto p-6 relative m-auto rounded-md my-2">
          {transcript}
        </div>
        <div className="btn flex justify-around max-w-3xl w-full m-auto">
          <button className="bg-green-600 text-lg h-fit shadow-md text-white rounded-md">Copy</button>
          <button className=" bg-green-600 text-lg h-fit shadow-md text-white rounded-md" onClick={startListening} style={{ display: listening ? 'none' : 'block' }}>Start Listening</button>
          <button className="bg-green-600 text-lg h-fit shadow-md text-white rounded-md" onClick={stopListening} style={{ display: listening ? 'block' : 'none' }}>Stop Listening</button>
          <button className="bg-green-600 text-lg h-fit shadow-md text-white rounded-md" onClick={SpeechRecognition.resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
