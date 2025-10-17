'use client';

import { useEffect, useRef, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const prevTimeRef = useRef<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const updateTimer = () => {
      const newTime = calculateTimeLeft();
      const prev = prevTimeRef.current;

      // Trigger flip animations only when values change
      const newFlip = {
        days: newTime.days !== prev.days,
        hours: newTime.hours !== prev.hours,
        minutes: newTime.minutes !== prev.minutes,
        seconds: newTime.seconds !== prev.seconds,
      };

      setFlip(newFlip);
      setTimeLeft(newTime);
      prevTimeRef.current = newTime;

      // Reset flip state after animation
      setTimeout(() => {
        setFlip({ days: false, hours: false, minutes: false, seconds: false });
      }, 600);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const renderFlipCard = (
    value: number,
    prevValue: number,
    label: string,
    isFlipping: boolean
  ) => (
    <div className={`container-sub ${isFlipping ? 'flip' : ''}`} data-type={label}>
      <div
        className="clock"
        data-before={formatNumber(value)}
        data-after={formatNumber(prevValue)}
      >
        <div className="span">
          <span></span>
          <span></span>
        </div>
        <div className="card">
          <div className="front">{formatNumber(value)}</div>
          <div className="back">{formatNumber(prevValue)}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      {renderFlipCard(timeLeft.days, prevTimeRef.current.days, 'dny', flip.days)}
      {renderFlipCard(timeLeft.hours, prevTimeRef.current.hours, 'hodiny', flip.hours)}
      {renderFlipCard(timeLeft.minutes, prevTimeRef.current.minutes, 'minuty', flip.minutes)}
      {renderFlipCard(timeLeft.seconds, prevTimeRef.current.seconds, 'sekundy', flip.seconds)}
    </div>
  );
}

