#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createPrimeGameData } from '../src/games/game-prime.js';

startGame(createPrimeGameData);
