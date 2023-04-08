import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

import './index.css';

const initialPosition = {
  x: 2,
  y: 3,
};

export function Hero() {
  const [heroPositionState, setHeroPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState('RIGHT');

  useEventListener('keydown', (event: any) => {
    switch (true) {
      case event.key === 'ArrowUp':
        setHeroPositionState({
          x: heroPositionState.x,
          y: heroPositionState.y + 1,
        });
        break;
      case event.key === 'ArrowDown':
        setHeroPositionState({
          x: heroPositionState.x,
          y: heroPositionState.y - 1,
        });
        break;
      case event.key === 'ArrowLeft':
        setHeroPositionState({
          x: heroPositionState.x - 1,
          y: heroPositionState.y,
        });
        setDirection('LEFT');
        break;
      case event.key === 'ArrowRight':
        setHeroPositionState({
          x: heroPositionState.x + 1,
          y: heroPositionState.y,
        });
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * heroPositionState.y,
        left: TILE_SIZE * heroPositionState.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: 'url(./assets/HERO.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`,
      }}
    />
  );
}
