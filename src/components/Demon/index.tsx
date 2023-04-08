import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants';

import './index.css';

export function Demon() {
  return (
    <div
      style={{
        left: TILE_SIZE * 15,
        bottom: TILE_SIZE * 3,
        position: 'absolute',
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: 'url(./assets/DEMON.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 1s steps(4) infinite',
      }}
    />
  );
}
