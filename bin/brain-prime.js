#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createPrimeGameData, createGameRules as createPrimeGameRules } from '../src/games/game-prime.js';

startGame(createPrimeGameData, createPrimeGameRules);
