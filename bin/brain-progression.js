#!/usr/bin/env node

import startGame from '../src/index.js';
import { createGameData as createProgressionGameData } from '../src/games/game-progression.js';

startGame(createProgressionGameData);
