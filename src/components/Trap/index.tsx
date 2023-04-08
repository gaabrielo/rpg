import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

import './index.css';

export function Trap() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 16,
        left: TILE_SIZE * 15,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: 'url(./assets/TRAP.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 1s steps(8) infinite',
      }}
    />
  );
}
