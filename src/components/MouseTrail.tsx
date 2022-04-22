import React, { useEffect, useRef, useState } from 'react';

/* Mouse trail adapted from a jQuery Codepen by Bryan C https://codepen.io/bryjch/pen/QEoXwA */
/* Credit to https://noahyamamoto.com/blog/mousetrailanimation */

interface Point {
  lifetime: number;
  x: number;
  y: number;
}

type MouseTrailProps = {
  isEnabled?: boolean;
};

const MouseTrail = ({ isEnabled = true }: MouseTrailProps) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startAnimation = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const points: Point[] = [];

    const addPoint = (x: number, y: number) => {
      points.push({
        x,
        y,
        lifetime: 0,
      });
    };

    const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
      addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
    };

    const onTouchMove = (e: TouchEvent) => {
      Array.from(e.touches).forEach(({ clientX, clientY }) => {
        addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
      });
    };

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('touchmove', onTouchMove, false);

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = (0.7 * (1 * 1000)) / 60; // Last 80% of a frame per point

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        let lastPoint;

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          // If the point dies, remove it.
          points.shift();
        } else {
          // Otherwise animate it:

          // As the lifetime goes on, lifePercent goes from 0 to 1.
          const lifePercent = point.lifetime / duration;
          const spreadRate = 7 * (1 - lifePercent);

          ctx.lineJoin = 'round';
          ctx.lineWidth = spreadRate;

          //   // As time increases decrease r and b, increase g to go from purple to green.
          //   const red = 0;
          //   const green = Math.floor(110 - 110 * lifePercent);
          //   const blue = Math.floor(210 + 210 * lifePercent);
          const red = Math.floor(190 - 190 * lifePercent);
          const green = 0;
          const blue = Math.floor(210 + 210 * lifePercent);
          ctx.strokeStyle = `rgb(${red},${green},${blue}`;

          ctx.beginPath();

          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);

          ctx.stroke();
          ctx.closePath();
        }
      }
      requestAnimationFrame(animatePoints);
    };

    animatePoints();

    return () => {
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('touchmove', onTouchMove, false);
    };
  };

  useEffect(() => {
    if (!isEnabled) return;

    const setCanvasSize = () => {
      setHeight(window.innerHeight);
      setWidth(document.body.clientWidth);
    };

    setCanvasSize();

    window.addEventListener('resize', setCanvasSize, false);
    const stopAnimation = startAnimation();

    // If the device supports cursors, start animation.
    // if (matchMedia('(pointer:fine)').matches) {

    // }

    return () => {
      if (stopAnimation) {
        stopAnimation();
      }

      window.removeEventListener('resize', setCanvasSize, false);
    };
  }, [isEnabled]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ position: 'fixed', zIndex: -1 }}
    />
  );
};

export default MouseTrail;
