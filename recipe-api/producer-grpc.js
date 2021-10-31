#!/usr/bin/node

const grpc = require('@grpc/grpc-js');
const loader = require('@grpc/proto-loader');
const pkg_def = loader.loadSync(__dirname + '/../shared/grpc-recipe.proto');
const recipe = grpc.loadPackageDefinition(pkg_def).recipe;
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;
const server = new grpc.Server();
server.addService(recipe.RecipeService.service, {
    getMetaData(_call, callback) {
        callback(null, {
            pid: process.pid,
        });
    },
    getRecipe: (call, cb) => {
    if(call.request.id !== 42) {
        return cs (new Error(`unknown recipe ${call.request.id}`))
    }
        cb(null, {
            id: 42, name: "Chicken Tikka Masala",
            "steps": "Chop up the chicken",
            ingredients: [
                {
                    id: 1, name: "Chicken", quantity: "1 lb"
                },
                {
                    id: 2, name: "Tikka Masala Sauce", quantity: "1 cup",
                },
            ]
        });
    },
});

server.bindAsync(`${HOST}:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) throw err;
        server.start();
        console.log(`gRPC Producer running on ${HOST}:${port}/`);
    }
);