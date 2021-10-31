# Distributed NodeJS Examples

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
    - [HTTP](#http)
    - [gRPC](#grpc)

- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is a working code repo created fot the book [Distributed Systems with Node.js](https://g.co/kgs/qhR4kB) by [Thomas Hunter](https://twitter.com/tlhunter?lang=en).

There are two main components of this repo:
The recipe API and the Web API.
Each component has a couple of different options for starting the service depending on which protocol you want to use.


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
[Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are required to run this project.

```bash
npm i -g yarn
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the repo:
```bash
git clone
```


Install Package Dependencies
```bash
cd web-api yarn 
```

And repeat

```bash
cd recipe-api yarn
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Currently HTTP and gRPC are implemented the files are labeled with the protocol name.

### HTTP <a name = "http"></a>

Start the recipe API with the following command:
```bash
cd recipe-api
node producer-http-basic.js
```

Start the web API Consumer with the following command:
```bash
cd web-api
node consumer-http-basic.js
```

### gRPC <a name = "grpc"></a>

Start the recipe API with the following command:
```bash
cd recipe-api
node producer-grpc.js
```
Start the web API Consumer with the following command:
```bash
cd web-api
node consumer-grpc.js
```