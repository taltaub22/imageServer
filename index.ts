import * as http from "http"
import * as staticAlias from 'node-static-alias';
import * as log4js from 'log4js';

var logger = log4js.getLogger('node-static-alias');

var fileServer = new staticAlias.Server(`${__dirname}/images`, {
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
            serve: 'sponsor1.png'
        },
        {
            match: '/sponsor2',
            serve: 'sponsor2.png'
        }
    ],
    logger: console
});

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(1395);
