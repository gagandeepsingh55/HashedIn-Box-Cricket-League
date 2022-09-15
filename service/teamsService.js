import {
	getAllTeamsDao,
} from '../dao/teams.js';
const getAllTeamsService = async (t) => await getAllTeamsDao(t);
export {
	getAllTeamsService
};
