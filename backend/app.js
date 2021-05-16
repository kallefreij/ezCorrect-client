const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/students');
const subjectRoutes = require('./routes/subjects');
const knowledgerequirementRoutes = require('./routes/knowledgerequirements');
const milestonesRoutes = require('./routes/milestones');
const taskRoutes = require('./routes/tasks');
const categoryRoutes = require('./routes/categories');
const centralContentRoutes = require('./routes/centralContent');

mongoose.connect("mongodb+srv://admin:YeJYeFhk5m85GIlt@cluster0-5tqle.mongodb.net/ezCorrectDB?retryWrites=true&w=majority")
    .then( () => {
        console.log('Connected to mongoDB cloud');
    })
    .catch( () => {
        console.log('Connection failed');
    });

const app = express();

app.use(bodyParser.json());

// Handeling CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/students', studentRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/knowledgerequirements', knowledgerequirementRoutes);
app.use('/api/milestones', milestonesRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/centralContents', centralContentRoutes);

module.exports = app;