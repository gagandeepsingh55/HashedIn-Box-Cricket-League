import {
	getAllMatchesDao,
	getMatchDetailsDao,
} from '../dao/matches.js';
const getAllMatchService = async (t) => await getAllMatchesDao(t);
const getMatchDetailsService = async (t,date) => await getMatchDetailsDao(t,date);
export {
	getAllMatchService,getMatchDetailsService
};
