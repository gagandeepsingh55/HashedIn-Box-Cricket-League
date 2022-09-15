import express from 'express';
import { getAllPlayers,getPlayerDetails,getTopWicketTaker,getTopScorer } from '../controller/player.js';
const router = express.Router();
router.get('/', getAllPlayers);
router.get('/playerdetail/:id', getPlayerDetails);
router.get('/getTopWicketTaker/:id', getTopWicketTaker);
router.get('/getTopScorer/:id', getTopScorer);
export default router;
