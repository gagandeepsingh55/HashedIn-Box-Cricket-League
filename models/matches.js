export default (sequelize, Sequelize) => {
	const Matches = sequelize.define('matches', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		teamOne: {
			type: Sequelize.STRING,
		},
		teamTwo: {
			type: Sequelize.STRING,
		},
        matchDate: {
			type: Sequelize.DATE,
		},
	});
	return Matches;
};
