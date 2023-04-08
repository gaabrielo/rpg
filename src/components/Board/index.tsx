import { GAME_SIZE } from '../../settings/constants';
import { Chest } from '../Chest';
import { Demon } from '../Demon';
import { Hero } from '../Hero';
import { MiniDemon } from '../MiniDemon';
import { Trap } from '../Trap';

export function Board() {
  return (
    <div>
      <Demon />
      <MiniDemon />
      <Hero />
      <Trap />
      <Chest />
      <img
        src="./assets/tileset.gif"
        alt="Board"
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </div>
  );
}
