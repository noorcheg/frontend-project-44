#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createEvenGameData, createGameRules as createEvenGameRules } from '../src/games/game-even.js';

startGame(createEvenGameData, createEvenGameRules);
