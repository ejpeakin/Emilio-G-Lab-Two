import { Game } from './game.js';

// Entry point. The game is exposed on window for poking at from the console,
// e.g. game.player.inventory.add({ id: 'diamond', count: 64 }) or game.world.time = 13000.
function hasWebGL2() {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch {
    return false;
  }
}

if (!hasWebGL2()) {
  window.showBootError?.('Your browser has 3D graphics (WebGL 2) turned off or unsupported. Try Chrome, Edge or Firefox with hardware acceleration enabled.');
} else {
  try {
    window.game = new Game();
  } catch (e) {
    window.showBootError?.(`The game failed to start: ${e.message}`);
    throw e;
  }
}
