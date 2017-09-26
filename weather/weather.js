const request = require('request');

// DarkSky API Key: cdef355b4e37833239cce50d0063282b
// DarkSky URL: https://api.darksky.net/forecast/[key]/[latitude],[longitude]

// print temperature and apparentTemperature

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/cdef355b4e37833239cce50d0063282b/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
