const moment = require('moment');
const getForecast = (req, res) => {
    const forecast = [{ date: moment().format('YYYY-MM-DD'), temperature: 25, condition: 'Sunny' }, { date: moment().add(1, 'days').format('YYYY-MM-DD'), temperature: 28, condition: 'Partly Cloudy' }];
    res.json(forecast);
};
module.exports = { getForecast };