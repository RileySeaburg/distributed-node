const server = require('fastify')({ logger: true });
const fetch = require('node-fetch');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';
const TARGET = process.env.TARGET || 'http://localhost:4000';

server.get('/', async () => {
    const req = await fetch(`${TARGET}/recipes/42`);
    const producer_data = await req.json();
    return {
        consumer_pid: process.pid,
        producer_data
    };
})

server.listen(PORT, HOST, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`consumer running on ${address}`);
})