#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createCalcGameData, createGameRules as createCalcGameRules } from '../src/games/game-calc.js';

startGame(createCalcGameData, createCalcGameRules);
