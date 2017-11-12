"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const staticAlias = require("node-static-alias");
const log4js = require("log4js");
const glob = require("glob");
var logger = log4js.getLogger('node-static-alias');
var fileServer = new staticAlias.Server(`${__dirname}/images`, {
    alias: [
        {
            match: '/legoEducation',
            serve: () => glob.sync("legoEducation.*", { cwd: `${__dirname}/images` }).pop()
        },
        {
            match: '/firstLegoLeague',
            serve: () => glob.sync("firstLegoLeague.*", { cwd: `${__dirname}/images` }).pop()
        },
        {
            match: '/challengeTheme',
            serve: () => glob.sync("challengeTheme.*", { cwd: `${__dirname}/images` }).pop()
        },
        {
            match: '/sponsor1',
            serve: () => glob.sync("sponsor1.*", { cwd: `${__dirname}/images` }).pop()
        },
        {
            match: '/sponsor2',
            serve: () => glob.sync("sponsor2.*", { cwd: `${__dirname}/images` }).pop()
        }
    ],
    logger: console
});
http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(1395);
//# sourceMappingURL=index.js.map