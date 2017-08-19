import * as http from "http"
var staticAlias = require("node-static-alias");
var log4js = require('log4js');

var logger = log4js.getLogger('node-static-alias');

var fileServer = new staticAlias.Server('./images', {
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
        }
    ],
    logger: console
});

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);