import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import express from 'express';

const server = new Server();

//middleware body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());


// Rutas de mi app
server.app.use( '/user', userRoutes );

//conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram', (err)=>{
    if(err) throw err;
    console.log('Data Base online');
})

//Levantar express
server.start( ()=>{
    console.log(`Servidor corriendo en puerto: ${server.port}` );
})