const calculateTemperatureAverage = (temperatures) => temperatures.reduce((a, b) => a + b, 0) / temperatures.length;
module.exports = { calculateTemperatureAverage };