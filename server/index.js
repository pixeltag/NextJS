const express = require('express');
const session = require('express-session');
const uuid = require('uuid');
const next = require('next');
const bodyParser = require('body-parser');
const { parse } = require('url');

const dev = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;

const app = next({ dir: "./app" , dev });
const handle = app.getRequestHandler();

const getRoutes = require('./routes');
const routes = getRoutes();

app.prepare().then(() => {
    const server = express();
    server.use(
        session({
            secret: uuid.v1(),
            name: 'sessionId',
            resave: true,
            saveUninitialized: true
        })
    );

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get("*", (req , res) => {
        const parseUrl = parse(req.url , true);
        const { pathname , query = {} } = parseUrl;

        /***
         * Pull in front end requests and check request against those routes
         */
        const route = routes[pathname];
        if(route) {
            return app.render(req , res , route.page , query);
        }
        handle(req , res);
    });

    server.listen(PORT , err => {
        if(err) throw err;
        console.log(" > Server started on port" , PORT);
    })
}).catch(err => {
    console.error(err);
    process.exit(1)
})
