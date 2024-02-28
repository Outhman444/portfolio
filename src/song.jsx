import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      if (audioElement) {
        audioElement.play().catch(error => {
          // Autoplay was prevented, you might want to handle this case
          console.error("Autoplay prevented:", error);
        });
      }
    };

    // Assuming you want to play the audio when the component mounts
    playAudio();

    // You can also use this to play the audio when a specific condition is met
    // For example, when a user enters a specific section of your webpage

    // Example: play the audio when the user scrolls down
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const threshold = 100; // Adjust this value based on your layout

      if (yOffset > threshold) {
        playAudio();
        // Optionally, remove the scroll event listener to avoid multiple plays
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <audio style={{display:"none"}} ref={audioRef} controls controlsList="nodownload">
      <source  src="./public/song/song.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;
