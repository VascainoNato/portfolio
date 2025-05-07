'use client';
import { useRef, useState, useEffect } from 'react';

const tracks = [
    '/music/lofi1.mp3',
    '/music/lofi2.mp3',
    '/music/lofi3.mp3',
    '/music/lofi4.mp3',
    '/music/lofi5.mp3',
    '/music/lofi6.mp3',
    '/music/lofi7.mp3',
    '/music/lofi8.mp3',
];

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = tracks[currentTrack];
      audio.volume = volume;
  
      const play = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch{
          console.warn('Autoplay bloqueado pelo navegador. Aguardando interação do usuário.');
        }
      };
      play();
    }
  }, [currentTrack]);
  

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return {
    audioRef,
    isPlaying,
    volume,
    togglePlay,
    handleEnded,
    handleVolumeChange,
  };
}