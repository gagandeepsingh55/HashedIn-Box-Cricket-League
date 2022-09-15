import express from 'express';
import { getAllTeams } from '../controller/teams.js';
const router = express.Router();
router.get('/', getAllTeams);
export default router;
