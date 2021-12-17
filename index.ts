import Server from './classes/server';
import mongoose from 'mongoose';
import express from 'express';
import userRoutes from './routes/usuario';
import postRoutes from './routes/post';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const server = new Server();

//middleware body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

//file upload
server.app.use(fileUpload({userTempfiles: true}));

//cors
server.app.use(cors({
    origin: true,
    credentials: true
}));


// Rutas de mi app
server.app.use( '/user', userRoutes );
server.app.use( '/posts', postRoutes );

//conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram', (err)=>{
    if(err) throw err;
    console.log('Data Base online');
})

//Levantar express
server.start( ()=>{
    console.log(`Servidor corriendo en puerto: ${server.port}` );
})