var express = require('express');
var app = express();

app.enable("jsonp callback name");

app.get('/cities', function(req, res, next) {
    var cities = {"cities": [
            {
                "name": "Concepción",
                "cordinateX": 1,
                "cordnateY": 2
            },
            {
                "name": "Santiago",
                "cordinateX": 1,
                "cordnateY": 2
            },
            {
                "name": "Viña del Mar",
                "cordinateX": 1,
                "cordnateY": 2
            },
            {
                "name": "San Pedro de la Paz",
                "cordinateX": 1,
                "cordnateY": 2
            },
            {
                "name": "Temuco",
                "cordinateX": 1,
                "cordnateY": 2
            },
            {
                "name": "Valparaiso",
                "cordinateX": 1,
                "cordnateY": 2
            }
        ]};

    console.log("Response: ");
    console.log(typeof cities);

    res.format({
        'application/json': function() {
            res.send(JSON.stringify(cities));
        }
    });
});
app.listen(8282);
console.log('Listening on port 8282...');