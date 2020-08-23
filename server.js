const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3333;

const { authenticate } = require('./auth/auth');

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Add custom routes before JSON Server router
server.post('/user/login', (req, res) => {
    const user = req.body;
    res.json(authenticate(user));
});

server.use(router);

server.listen(port);