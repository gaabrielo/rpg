import useEnemyMovement from "../../hooks/useEnemyMovement";
import {
  DEMON_TILE_SIZE,
  EDirection,
  TILE_SIZE,
} from "../../settings/constants";

import "./index.css";

export function Demon() {
  const { position, direction } = useEnemyMovement({ x: 5, y: 5 });

  return (
    <div
      style={{
        left: TILE_SIZE * position.x,
        bottom: TILE_SIZE * position.y,
        position: "absolute",
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "demon-animation 1s steps(4) infinite",
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
}
