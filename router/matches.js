import express from 'express';
import { getAllMatches,getMatchDetails, } from '../controller/matches.js';
const router = express.Router();
router.get('/', getAllMatches);
router.get('/getMatchDetails/:date', getMatchDetails);
export default router;
