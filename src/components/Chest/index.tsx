import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

import './index.css';

export function Chest() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 2,
        left: TILE_SIZE * 10,
        width: TILE_SIZE,
        height: TILE_SIZE,
        backgroundImage: 'url(./assets/CHEST.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 1s steps(3) infinite',
      }}
    />
  );
}
