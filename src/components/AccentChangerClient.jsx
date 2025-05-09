import React, { useEffect, useRef, useState } from "react";

const AccentChangerClient = () => {
  const ws = useRef(null);
  const mediaRecorder = useRef(null);
  const audioPlayer = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    ws.current = new WebSocket("wss://your-backend-url:8080"); // replace with deployed WebSocket
    ws.current.binaryType = "arraybuffer";

    ws.current.onopen = () => console.log("🔗 WebSocket connected");
    ws.current.onerror = (err) => console.error("❌ WS error", err);
    ws.current.onmessage = (event) => {
      const audioBlob = new Blob([event.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      audioPlayer.current.src = audioUrl;
      audioPlayer.current.play();
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream, { mimeType: "audio/webm" });

    mediaRecorder.current.ondataavailable = (e) => {
      if (ws.current?.readyState === 1) {
        ws.current.send(e.data);
      }
    };

    mediaRecorder.current.start(250); // send every 250ms
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Accent Converter</h2>
      <button
        className={`px-6 py-2 rounded text-white ${isRecording ? "bg-red-600" : "bg-green-600"}`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? "Stop Accent" : "Start Accent"}
      </button>
      <audio ref={audioPlayer} hidden />
    </div>
  );
};

export default AccentChangerClient;
