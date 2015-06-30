/*jslint node: true */
"use strict";
var Hapi = require('hapi');
var server = new Hapi.Server();
var config=require('./config/config');
var Path = require('path');
server.views(
    {
        engines: config.viewEngines,
        path: Path.join(__dirname, 'templates')
    }
);

server.connection({port: config.port});

server.ext('onRequest', function(request,reply){
    //plug in something here if you want to run it for every request
    reply.continue();
});


require('./plugins')(server);
var routes= require('./routes/routes');
server.route(routes)

server.start(function () {
    console.log('server running at:', server.info.uri);
});




