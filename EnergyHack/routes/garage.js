var express = require('express');
var request = require('request');
var mongodb = require('mongodb'),
    Server = mongodb.Server,
    Db = mongodb.Db;
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var cors = require('cors');

const database = "PAT";
const collection = "data";
const mongodbURI = "mongodb://dsuser:dsuserisadmin@dscluster-shard-00-00-mwrlu.mongodb.net:27017,dscluster-shard-00-01-mwrlu.mongodb.net:27017,dscluster-shard-00-02-mwrlu.mongodb.net:27017/test?ssl=true&replicaSet=DSCluster-shard-0&authSource=admin&retryWrites=true";




router.get('/', cors(), function(req, res, next) {
    var weather;
    var options = { method: 'GET',
        url: 'http://dataservice.accuweather.com/currentconditions/v1/1310',
        qs:
            { apikey: 'o0cX0q6fUeaVKeFbacTMYf3kGEAyDILe',
                language: 'en-us',
                details: 'false' },
        headers:
            { 'Postman-Token': 'f3c8a658-2535-4ba7-a8c7-fe5a4841ced0',
                'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        weather = body;
        console.log(body);
    });

    MongoClient.connect(mongodbURI, { useNewUrlParser: true },function (err, client) {
        if (err) throw err;
        var db = client.db("PAT");
        var collection = db.collection(req.query.collectionName);
        console.log(collection.find({Month : req.query.month}).toArray(function (err, docs) {
            if (err) res.send(err)
            else res.send(docs)
        }));
        client.close();
    });


});



module.exports = router;