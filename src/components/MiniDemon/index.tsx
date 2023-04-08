import useEnemyMovement from "../../hooks/useEnemyMovement";
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

import "./index.css";

export function MiniDemon() {
  const { position, direction } = useEnemyMovement({ x: 5, y: 8 });

  return (
    <div
      style={{
        position: "absolute",
        left: TILE_SIZE * position.x,
        bottom: TILE_SIZE * position.y,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: "mini-demon-animation 1s steps(4) infinite",
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
}
