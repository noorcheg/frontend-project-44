#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createProgressionGameData, createGameRules as createProgressionGameRules } from '../src/games/game-progression.js';

startGame(createProgressionGameData, createProgressionGameRules);
