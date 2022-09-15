import {
	getAllPlayersDao,
	getPlayerDetailsDao,
	getTopWicketTakerDao,
	getTopScorerDao,
} from '../dao/player.js';
const getAllPlayersService = async (t) => await getAllPlayersDao(t);
const getPlayerDetailsByIdService = async (t,id) => await getPlayerDetailsDao(t,id);
const getTopWicketTakerService = async (t,id) => await getTopWicketTakerDao(t,id);
const getTopScorerService = async (t,id) => await getTopScorerDao(t,id);
export {
	getAllPlayersService,getPlayerDetailsByIdService,getTopWicketTakerService,getTopScorerService
};
