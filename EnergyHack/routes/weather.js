var express = require('express');
var request = require('request');
var router = express.Router();
var cors = require('cors');

router.get('/', cors(), function(req, res, next) {
    var options = { method: 'GET',
        url: 'http://dataservice.accuweather.com/currentconditions/v1/1310',
        qs:
            { apikey: 'o0cX0q6fUeaVKeFbacTMYf3kGEAyDILe',
                language: 'en-us',
                details: 'false' },
        headers:
            { 'Postman-Token': 'f3c8a658-2535-4ba7-a8c7-fe5a4841ced0',
                'cache-control': 'no-cache' } };

    request(options, function (error, response, weather) {
        if (error) throw new Error(error);
        res.send(weather)
    });

});



module.exports = router;