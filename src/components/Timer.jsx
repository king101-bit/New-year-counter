import React, { useState, useEffect } from "react";
import "../index.css";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [bgImage, setBgImage] = useState(
    "url('data:image/svg+xml,%3Csvg%20id=%22visual%22%20viewBox=%220%200%20900%20450%22%20width=%22900%22%20height=%22450%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20version=%221.1%22%3E%3Cdefs%3E%3Cfilter%20id=%22blur1%22%20x=%22-10%25%22%20y=%22-10%25%22%20width=%22120%25%22%20height=%22120%25%22%3E%3CfeFlood%20flood-opacity=%220%22%20result=%22BackgroundImageFix%22%3E%3C/feFlood%3E%3CfeBlend%20mode=%22normal%22%20in=%22SourceGraphic%22%20in2=%22BackgroundImageFix%22%20result=%22shape%22%3E%3C/feBlend%3E%3CfeGaussianBlur%20stdDeviation=%22149%22%20result=%22effect1_foregroundBlur%22%3E%3C/feGaussianBlur%3E%3C/filter%3E%3C/defs%3E%3Crect%20width=%22900%22%20height=%22450%22%20fill=%22%23003049%22%3E%3C/rect%3E%3Cg%20filter=%22url(%23blur1)%22%3E%3Ccircle%20cx=%2276%22%20cy=%22155%22%20fill=%22%23669bbc%22%20r=%22332%22%3E%3C/circle%3E%3Ccircle%20cx=%22892%22%20cy=%22371%22%20fill=%22%23003049%22%20r=%22332%22%3E%3C/circle%3E%3Ccircle%20cx=%22711%22%20cy=%22362%22%20fill=%22%23669bbc%22%20r=%22332%22%3E%3C/circle%3E%3Ccircle%20cx=%22628%22%20cy=%22177%22%20fill=%22%23669bbc%22%20r=%22332%22%3E%3C/circle%3E%3Ccircle%20cx=%22351%22%20cy=%22191%22%20fill=%22%23003049%22%20r=%22332%22%3E%3C/circle%3E%3Ccircle%20cx=%22512%22%20cy=%22027%22%20fill=%22%23669bbc%22%20r=%22332%22%3E%3C/circle%3E%3C/g%3E%3C/svg%3E')"
  );

  useEffect(() => {
    // Set the target New Year's date
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
    const today = new Date();

    // Check if it's January 1st
    if (today.getMonth() === 0 && today.getDate() === 1) {
      setBgImage('url("path/to/fireworks-image.jpg")'); // Replace with the actual fireworks image URL
    }

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = newYearDate - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: bgImage }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-8">New Year&apos;s Counter</h1>
        <span className="font-bold text-4xl mt-4">
          {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:
          {timeRemaining.seconds}
        </span>
        <p>
          Made by{" "}
          <a href="https://portfolio-king101bits-projects.vercel.app/">Zack</a>
        </p>
      </div>
    </div>
  );
};

export default Timer;
