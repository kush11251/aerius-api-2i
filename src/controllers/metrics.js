const moment = require('moment');
const getMetrics = (req, res) => {
    const metrics = [{ date: moment().format('YYYY-MM-DD'), temperature: 25 }, { date: moment().add(1, 'days').format('YYYY-MM-DD'), temperature: 28 }];
    res.json(metrics);
};
module.exports = { getMetrics };