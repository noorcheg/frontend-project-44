#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createCalcGameData } from '../src/games/game-calc.js';

startGame(createCalcGameData);
