import Sequelize from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import Matches from './matches.js'
import Teams from './teams.js'
import Players from './players.js'
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.matches = Matches(sequelize, Sequelize);
db.teams = Teams(sequelize, Sequelize);
db.players = Players(sequelize, Sequelize);
export default { db };
