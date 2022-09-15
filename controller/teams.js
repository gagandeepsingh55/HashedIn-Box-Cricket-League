import db from '../models/index.js';
import {
	getAllTeamsService,
} from '../service/teamsService.js';
const { sequelize } = db.db;

const getAllTeams = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		
		return await getAllTeamsService(t);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result ,
	});
	next();
};


export { getAllTeams};
