#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createGcdGameData, createGameRules as createGcdGameRules } from '../src/games/game-gcd.js';

startGame(createGcdGameData, createGcdGameRules);
