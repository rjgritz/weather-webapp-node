const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${long}&units=m`

    request({ url, json: true }, (error, response) => {
        const { weather_descriptions, temperature, feelslike, humidity } = response.body.current

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else {
           callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out. The humidity is ' + humidity + '%.')
        }
    })
}

module.exports = forecast