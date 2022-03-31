const express = require("express");
const dotenv = require("dotenv").config();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { request } = require("http");

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: 'Cronode API',
            description: 'Cronode API information',
            contacts:{
                name: 'SantiagoBedoya'
            },
            servers:['https://cronode.herokuapp.com/demo']
        }
    },
    apis: ['demo/*.routes.js'],
}


const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Initializations
const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Settings
app.set("port", process.env.PORT || 4000);
app.use("/uploads", express.static(path.resolve("uploads")));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));
app.use(cors());
app.use(session({secret: process.env.SECRET, resave:true, saveUninitialized: true}));


// Routes

app.use("/api", require("./routes/sgh/auth.routes"));
app.use("/api", require("./routes/sgh/rols.routes"));
app.use("/api", require("./routes/sgh/contractType.routes"));
app.use("/api", require("./routes/sgh/positions.routes"));
app.use("/api", require("./routes/sgh/user.routes"));
app.use("/api", require("./routes/sgh/contracts.routes"));
app.use("/api", require("./routes/sgh/temporaryUserActivities.routes"));
app.use("/api", require("./routes/sgh/zones.routes"));
app.use("/api", require("./routes/sgh/municipalities.routes"));
app.use("/api", require("./routes/sgh/modalities.routes"));
app.use("/api", require("./routes/sgh/formationProgramTypes.routes"));
app.use("/api", require("./routes/sgh/formationPrograms.routes"));
app.use("/api", require("./routes/sgh/competences.routes"));
app.use("/api", require("./routes/sgh/learningResults.routes"));
app.use("/api", require("./routes/sgh/groups.routes"));
app.use("/api", require("./routes/sgh/programations.routes"));
app.use("/api", require("./routes/sgh/ambients.routes"));
app.use("/api", require("./routes/sgh/schedules.routes"));
app.use("/api", require("./routes/sgh/deprogrammingReasons.routes"));
app.use("/api", require("./routes/sgh/deprogrammings.routes"));
app.use("/api", require("./routes/sgh/typeActivities.routes"));
app.use("/api", require("./routes/sgh/otherActivities.routes"));
app.use("/api", require("./routes/sgh/periodicities.routes"));
app.use("/api", require("./routes/sgh/reports.routes"));

// Store API
app.use("/api/gestec", require("./routes/store/ambients.routes"));
app.use("/api/gestec", require("./routes/store/user.routes"));
app.use("/api/gestec", require("./routes/store/auth.routes"));

// CES API
app.use('/api/ces', require('./routes/ces/instructors.routes.js'));
app.use('/api/ces', require('./routes/ces/positions.routes.js'));
app.use('/api/ces', require('./routes/ces/contractTypes.routes.js'));
app.use('/api/ces', require('./routes/ces/groups.routes.js'));
app.use('/api/ces', require('./routes/ces/modalities.routes.js'));
app.use('/api/ces', require('./routes/ces/formationProgramTypes.routes'));
app.use('/api/ces', require('./routes/ces/formationPrograms.routes'));

// Demo
app.use('/demo', require('./demo/ambient.routes'));
app.use('/demo', require('./demo/competences.routes'));
app.use('/demo', require('./demo/contracts.routes'));
app.use('/demo', require('./demo/contractType.routes'));
app.use('/demo', require('./demo/deprogrammingReasons.routes'));
app.use('/demo', require('./demo/formationPrograms.routes'));
app.use('/demo', require('./demo/formationProgramTypes.routes'));
app.use('/demo', require('./demo/groups.routes'));
app.use('/demo', require('./demo/learningResults.routes'));
app.use('/demo', require('./demo/modalities.routes'));
app.use('/demo', require('./demo/municipalities.routes'));
app.use('/demo', require('./demo/otherActivities.routes'));
app.use('/demo', require('./demo/periodicities.routes'));
app.use('/demo', require('./demo/positions.routes'));
app.use('/demo', require('./demo/programations.routes'));
app.use('/demo', require('./demo/reports.routes'));
app.use('/demo', require('./demo/schedules.routes'));
app.use('/demo', require('./demo/temporaryUserActivities.routes'));
app.use('/demo', require('./demo/typeActivities.routes'));
app.use('/demo', require('./demo/user.routes'));

// Export app
module.exports = app;
