// src/components/BackgroundMusic.jsx
import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      const audioElement = audioRef.current;
      if (audioElement && !isPlaying) {
        audioElement.play()
          .then(() => {
            setIsPlaying(true);
            document.removeEventListener('scroll', handleUserInteraction);
            document.removeEventListener('click', handleUserInteraction);
          })
          .catch((error) => {
            console.log("Playback error:", error);
          });
      }
    };

    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src="/fm-freemusic-inspiring-optimistic-upbeat-energetic-guitar-rhythm(chosic.com).mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
