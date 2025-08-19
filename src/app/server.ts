import {Server}  from 'http'
import app from './app';
import mongoose from 'mongoose';
let server:Server

const PORT = 5000

async function main (){
    try {
        await mongoose.connect('mongodb+srv://mongoDB:mongoBD45780@cluster0.obozyps.mongodb.net/advaced-note-app?retryWrites=true&w=majority&appName=Cluster0')
        console.log('concent to MongoDB using to Mongoose');
        server = app.listen(PORT,()=>{
            console.log(`app is listen on the port ${PORT} `);
        }) 
    } catch (error) {
        console.log(error);
    }
}

main()