import express from 'express'
import bodyParser from 'body-parser'
import matchesRoutes from './router/matches.js';
import teamsRoutes from './router/teams.js'
import playerRoutes from './router/player.js'
import db from './models/index.js';
const PORT=3001
const app = express()
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use('/matches', matchesRoutes);
app.use('/teams', teamsRoutes);
app.use('/players', playerRoutes);
console.log(db.db.sequelize);
db.db.sequelize
	.sync()
	.then(() => {
		console.log('Synced db.');
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err.message);
	});
app.listen(PORT,()=>console.log("listening on port: ", PORT))