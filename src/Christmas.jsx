import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

export default function Christmas({ user }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // 🎆 Confetti
    confetti({
      particleCount: 300,
      spread: 140,
      origin: { y: 0.6 }
    });

    // 🎶 Play music
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
      });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4">
      
      {/* 🎶 Audio */}
      <audio ref={audioRef} loop>
        <source src="/carol.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎄 Greeting */}
      <h1 className="text-4xl mb-4">🎄 Merry Christmas {user.name}</h1>
      <p className="max-w-md text-lg mb-6">{user.message}</p>

      {/* 🔊 Music Toggle */}
      <button
        onClick={toggleMusic}
        className="border px-4 py-2 rounded text-sm opacity-80 hover:opacity-100"
      >
        {playing ? "🔊 Mute Music" : "🔈 Play Music"}
      </button>
    </div>
  );
}
