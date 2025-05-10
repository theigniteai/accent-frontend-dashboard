// AccentChanger.jsx
import React, { useState, useRef } from "react";

const AccentChanger = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState("us");
  const wsRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ws = new WebSocket("wss://accent-backend-final.onrender.com");

    ws.onopen = () => {
      console.log("WebSocket connected");
      ws.send(JSON.stringify({ type: "start", accent: selectedAccent }));
    };

    ws.onmessage = (message) => {
      const audioBlob = new Blob([message.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    };

    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorder.ondataavailable = (e) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(e.data);
      }
    };

    mediaRecorder.start(300); // Send chunk every 300ms

    mediaRecorderRef.current = mediaRecorder;
    wsRef.current = ws;
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    wsRef.current.send(JSON.stringify({ type: "stop" }));
    wsRef.current.close();
    setIsRecording(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">Live Accent Changer</h1>
      
      <label className="block mb-2 font-semibold">Choose Accent:</label>
      <select
        value={selectedAccent}
        onChange={(e) => setSelectedAccent(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="us">US English</option>
        <option value="uk">UK English</option>
        <option value="au">Australian English</option>
        <option value="in">Indian English</option>
      </select>

      <div className="flex items-center gap-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            🎙️ Start Accent Live
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            ⏹️ Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default AccentChanger;
