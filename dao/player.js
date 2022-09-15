import db from '../models/index.js';
import Op from 'sequelize'
const { sequelize,players} = db.db;
const getAllPlayersDao = async (t) => {
	return await players.findAll({ transaction: t });
};
const getPlayerDetailsDao = async (t, id) => {
	return await players.findOne(
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const getTopWicketTakerDao = async (t, id) => {
	console.log("id", id );
	return await players.findAll({

		where: {
			teamid: id,
			wickets : sequelize.literal(`wickets = (SELECT MAX(wickets) FROM players)`),
	
		  },
		// group: ['playername']
	},
		{ transaction: t }
	  );
};

const getTopScorerDao = async (t, id) => {
	console.log("id", id );
	return await players.findAll({

		where: {
			teamid: id,
			runs : sequelize.literal(`runs = (SELECT MAX(runs) FROM players)`),
	
		  },
		// group: ['playername']
	},
		{ transaction: t }
	  );
};


export {getAllPlayersDao,getPlayerDetailsDao,getTopWicketTakerDao,getTopScorerDao}