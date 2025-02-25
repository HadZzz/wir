import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Inisialisasi audio ketika komponen dimount
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Coba play audio ketika user berinteraksi dengan halaman
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Hapus event listener setelah berhasil play
            document.removeEventListener('click', playAudio);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
          });
      }
    };

    // Tambahkan event listener untuk mendeteksi interaksi user
    document.addEventListener('click', playAudio);

    // Cleanup ketika komponen unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', playAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.5;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-50 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors flex items-center gap-2"
      title={isMuted ? 'Unmute Music' : 'Mute Music'}
    >
      {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
      <span className="text-sm mr-1">{isPlaying ? (isMuted ? 'Unmute' : 'Mute') : 'Click to Play'}</span>
    </button>
  );
};

export default AudioPlayer;
