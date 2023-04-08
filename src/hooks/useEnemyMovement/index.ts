import { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import useInterval from "@use-it/interval";
import { handleNextPosition } from "../../contexts/canvas/helpers";

function useEnemyMovement(initialPosition) {
  const [enemyPositionState, setEnemyPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);

    const directionsArray = Object.values(EDirection);

    const randomDirection = directionsArray[random];

    const nextMovement = handleNextPosition(
      randomDirection,
      enemyPositionState
    );

    setDirection(randomDirection);
    setEnemyPositionState(nextMovement);
  }, 2000);

  return {
    position: enemyPositionState,
    direction: direction,
  };
}

export default useEnemyMovement;
