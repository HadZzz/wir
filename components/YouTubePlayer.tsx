import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const YouTubePlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className="hidden">
        <iframe
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/wTqaveCTYjc?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=wTqaveCTYjc`}
          title="Background Music"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-4 right-4 z-50 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
        title={isMuted ? 'Unmute Music' : 'Mute Music'}
      >
        {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default YouTubePlayer;
