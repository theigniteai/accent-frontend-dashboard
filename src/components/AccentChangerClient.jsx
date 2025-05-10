// AccentChanger.jsx
import React, { useState, useRef } from "react";

const AccentChangerClient = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState("us");
  const wsRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const ws = new WebSocket("wss://accent-backend-final.onrender.com");
    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      console.log("🔗 WebSocket connected");
      ws.send(JSON.stringify({ type: "start", accent: selectedAccent }));
    };

    ws.onmessage = (event) => {
      const audioBlob = new Blob([event.data], { type: "audio/mpeg" });
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

    mediaRecorder.start(300); // send every 300ms
    mediaRecorderRef.current = mediaRecorder;
    wsRef.current = ws;
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: "stop" }));
      wsRef.current.close();
    }
    setIsRecording(false);
  };

  return (
    <div className="p-4 border rounded bg-white">
      <label className="block font-bold mb-2">Select Accent:</label>
      <select
        value={selectedAccent}
        onChange={(e) => setSelectedAccent(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value="us">US English</option>
        <option value="uk">British English</option>
        <option value="aus">Australian English</option>
        <option value="in">Indian English</option>
      </select>

      <div>
        {!isRecording ? (
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded"
            onClick={startRecording}
          >
            🎤 Start Accent Live
          </button>
        ) : (
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={stopRecording}
          >
            ⏹️ Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default AccentChangerClient;

