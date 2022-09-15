export default (sequelize, Sequelize) => {
	const Players = sequelize.define('players', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		teamid: {
			type: Sequelize.INTEGER,
			references: {
				model: 'teams',
				key: 'id'
			},
			onUpdate: 'cascade',
			onDelete: 'cascade'
		},
        playername: {
			type: Sequelize.STRING,
		},
        wickets: {
			type: Sequelize.INTEGER,
		},
        runs: {
			type: Sequelize.INTEGER,
		},
	});
	return Players;
};
