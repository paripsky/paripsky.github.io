import { Box, BoxProps } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

export type MatrixProps = BoxProps;

export const Matrix: React.FC<MatrixProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const width = (canvas.width = document.body.offsetWidth);
    const height = (canvas.height = document.body.offsetHeight);
    const columnCount = Math.floor(width / 20) + 1;
    const lettersYPositions = Array(columnCount).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    function matrix() {
      if (!ctx) return;

      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace';

      lettersYPositions.forEach((y, ind) => {
        const letter = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(letter, x, y);
        lettersYPositions[ind] = y > 100 + Math.random() * 10000 ? 0 : y + 20;
      });
    }

    const interval = setInterval(matrix, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box {...props}>
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default Matrix;
