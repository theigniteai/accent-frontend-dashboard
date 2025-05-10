import React, { useState, useRef } from "react";

const AccentChanger = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState("us");
  const wsRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const ws = new WebSocket("wss://accent-backend-final.onrender.com");
    ws.binaryType = "arraybuffer";

    ws.onopen = () => {
      console.log("🟢 WebSocket Connected");
      ws.send(JSON.stringify({ type: "start", accent: selectedAccent }));
    };

    ws.onmessage = (event) => {
      console.log("🎧 Received WebSocket message:", event.data);

      try {
        const blob = new Blob([event.data], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        console.log("▶️ Audio URL:", url);

        const audio = new Audio(url);
        audio.play().catch((err) => {
          console.error("❌ Playback failed:", err.message);
        });
      } catch (e) {
        console.error("❌ Error playing audio:", e.message);
      }
    };

    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorder.ondataavailable = (e) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(e.data);
      }
    };

    mediaRecorder.start(300);
    mediaRecorderRef.current = mediaRecorder;
    wsRef.current = ws;
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send("stop");
    }
    setIsRecording(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🎙️ Accent Changer (Live)</h2>

      <label className="block mb-2 font-semibold">Choose Accent:</label>
      <select
        value={selectedAccent}
        onChange={(e) => setSelectedAccent(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
      >
        <option value="us">US English</option>
        <option value="uk">British English</option>
        <option value="aus">Australian English</option>
        <option value="in">Indian English</option>
      </select>

      <div className="flex gap-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            ▶️ Start
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-6 py-2 rounded"
          >
            ⏹️ Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default AccentChanger;
