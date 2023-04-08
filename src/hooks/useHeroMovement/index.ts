import { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

function useHeroMovement(initialPosition) {
  const [heroPositionState, setHeroPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: any) => {
    const direction = event.key as EDirection;
    const nextMovement = handleNextPosition(direction, heroPositionState);

    setDirection(direction);
    setHeroPositionState(nextMovement);
  });

  return {
    position: heroPositionState,
    direction: direction,
  };
}

export default useHeroMovement;
