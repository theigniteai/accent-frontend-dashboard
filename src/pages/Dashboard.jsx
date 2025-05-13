import React, { useState, useRef } from 'react'
import io from 'socket.io-client'

const Dashboard = () => {
  const [accent, setAccent] = useState('us')
  const [recording, setRecording] = useState(false)
  const socketRef = useRef(null)
  const mediaStreamRef = useRef(null)
  const mediaRecorderRef = useRef(null)

  const handleAccentChange = (e) => {
    setAccent(e.target.value)
  }

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaStreamRef.current = stream
    const mediaRecorder = new MediaRecorder(stream)
    const socket = io(import.meta.env.VITE_RELAY_SOCKET_URL)
    socket.emit('start', { accent })

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0 && socket.connected) {
        socket.emit('audio_chunk', event.data)
      }
    }

    mediaRecorder.onstop = () => {
      socket.emit('stop')
      socket.disconnect()
    }

    mediaRecorder.start(250)
    mediaRecorderRef.current = mediaRecorder
    socketRef.current = socket
    setRecording(true)
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop())
    }
    setRecording(false)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AccentShift Live</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Accent:</label>
        <select
          value={accent}
          onChange={handleAccentChange}
          className="border p-2 rounded w-full"
        >
          <option value="us">🇺🇸 American</option>
          <option value="uk">🇬🇧 British</option>
          <option value="aus">🇦🇺 Australian</option>
        </select>
      </div>

      {!recording ? (
        <button
          onClick={startRecording}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Start Accent Live
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Stop
        </button>
      )}
    </div>
  )
}

export default Dashboard
