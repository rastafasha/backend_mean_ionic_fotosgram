"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const server = new server_1.default();
//middleware body parser
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
// Rutas de mi app
server.app.use('/user', usuario_1.default);
//conectar db
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', (err) => {
    if (err)
        throw err;
    console.log('Data Base online');
});
//Levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`);
});
