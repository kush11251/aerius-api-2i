const express = require('express');
const app = express();
const metricsController = require('./controllers/metrics');
const forecastController = require('./controllers/forecast');

app.use(express.json());
app.get('/metrics', metricsController.getMetrics);
app.get('/forecast', forecastController.getForecast);

app.listen(3000, () => {
    console.log('Aerius API listening on port 3000');
});