import { timeStamp } from 'console'
import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
import { type } from 'os'
import { Note } from './Models/Note.Models'
import { noteRoute } from './Controllers/Note.Controllers'
import { userRouter } from './Controllers/User.Controllers'
const app : Application = express()

app.use(express.json())

app.use('/note', noteRoute)
app.use('/user', userRouter)


app.get('/',(req:Request, res:Response)=>{
     res.send("welcome to Note App")
})

export default app 