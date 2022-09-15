import db from '../models/index.js';
const { sequelize, matches} = db.db;

const getAllMatchesDao = async (t) => {
	return await matches.findAll({ transaction: t });
};
const getMatchDetailsDao = async (t,date) => {
	console.log("date", date );
	return await matches.findAll({
		where: {
			matchDate: date
		  },
	},
		{ transaction: t }
	  );
};

export {getAllMatchesDao,getMatchDetailsDao}