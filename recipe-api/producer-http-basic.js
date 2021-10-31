#!/usr/bin/env node
const server = require('fastify')({ logger: true });


const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;

console.log(`worker pid=${process.pid}`);

server.get('/recipes/:id', async (req,reply) => {
    const id = Number(req.params.id);
    if(id != 42) {
        reply.statusCode = 404;
        return {error: 'not found'};

    }
    return {
        producer_pid: process.pid,
        recipe: {
            id, name: "Chicken Tika Masala",
            steps: "Throw it at the wall...",
            ingredients: [
                {id: 1, name: "Chicken", quantity: "1 lb"},
                {id: 2, name: "Tika Masala Sauce", quantity: "2 cups"}
            ]
        }
    }
});

server.listen(PORT, HOST, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
      }
    console.log(`Producer running at http://${HOST}:${PORT}`);
})

