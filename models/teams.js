export default (sequelize, Sequelize) => {
	const Teams = sequelize.define('teams', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		teamName: {
			type: Sequelize.STRING,
		},
	});
	return Teams;
};
