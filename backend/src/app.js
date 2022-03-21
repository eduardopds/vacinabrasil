'use strict';

// require("dotenv-safe").config({ path: ".env" });
const express = require('express');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const cors = require('cors');
const app = express();
const sequelize = require('../src/database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Carrega rotas
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/userRoutes');
const statsRoutes = require('./routes/statsRoutes');

morganBody(app);

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/stats', statsRoutes);

const User = require('./models/User');
// const Exercise = require("./models/Exercise");
// const Day = require("./models/Day");

User.init(sequelize);
// Exercise.init(sequelize);
// Day.init(sequelize);

// Day.associate(sequelize.models);
// Group.associate(sequelize.models);

sequelize.sync({ force: true });

module.exports = app;
