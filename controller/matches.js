import db from '../models/index.js';
import {
	getAllMatchService,
	getMatchDetailsService,
} from '../service/matchService.js';
const { sequelize } = db.db;

const getAllMatches = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		return await getAllMatchService(t);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result ,
	});
	next();
};

const getMatchDetails = async (req, res, next) => {
	const { date } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await getMatchDetailsService(t, date);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};
export { getAllMatches,getMatchDetails};
