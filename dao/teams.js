import db from '../models/index.js';

const { sequelize,teams} = db.db;
const getAllTeamsDao = async (t) => {
	return await teams.findAll({ transaction: t });
};
export {getAllTeamsDao}