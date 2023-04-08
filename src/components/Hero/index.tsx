import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../../settings/constants";

import "./index.css";
import useHeroMovement from "../../hooks/useHeroMovement";

const initialPosition = {
  x: 2,
  y: 3,
};

export function Hero() {
  const { position, direction } = useHeroMovement(initialPosition);

  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: "hero-animation 1s steps(4) infinite",
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
      }}
    />
  );
}
