import db from '../models/index.js';
import {
	getAllPlayersService,getPlayerDetailsByIdService,getTopWicketTakerService,getTopScorerService,
} from '../service/playerService.js';
const { sequelize } = db.db;

const getAllPlayers = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		return await getAllPlayersService(t);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result ,
	});
	next();
};

const getPlayerDetails = async (req, res, next) => {
		const { id } = req.params;
		const result = await sequelize.transaction(async (t) => {
			return await getPlayerDetailsByIdService(t, id);
		});
		console.log(result);
		res.status(200).send({
			success: true,
			message: result ? 'Data Found!!!' : 'No Data Found !!!',
			data: result,
		});
		next();
};

const getTopWicketTaker = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await getTopWicketTakerService(t,id);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result ? 'Data Found!!!' : 'No Data Found !!!',
		data: result ,
	});
	next();
};

const getTopScorer = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await getTopScorerService(t,id);
	});
	console.log(result);
	res.status(200).send({
		success: true,
		message: result ? 'Data Found!!!' : 'No Data Found !!!',
		data: result ,
	});
	next();
};
export { getAllPlayers,getPlayerDetails,getTopWicketTaker,getTopScorer};
