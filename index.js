"use strict";
exports.__esModule = true;
var http = require("http");
var staticAlias = require("node-static-alias");
var log4js = require('log4js');
var logger = log4js.getLogger('node-static-alias');
var fileServer = new staticAlias.Server(__dirname + "/images", {
    alias: [
        {
            match: '/legoEducation',
            serve: 'legoeducationlogo.png'
        },
        {
            match: '/firstLegoLeague',
            serve: 'FIRSTLego_iconHorz_RGB.gif'
        },
        {
            match: '/challengeTheme',
            serve: 'FIRST-FLL-HYDRO-DYNAMICS-web-logo.png'
        },
        {
            match: '/sponsor1',
            serve: '3m.png'
        },
        {
            match: '/sponsor2',
            serve: 'National_Instruments_logo.svg.png'
        }
    ],
    logger: console
});
http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(1395);
