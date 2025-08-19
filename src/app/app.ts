import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose'
import { type } from 'os'
const app : Application = express()

app.use(express.json())

const nodeSchema = new Schema({
  title: { type: String, required: true, trim: true },  // title বাধ্যতামূলক
  content: { type: String, default: 'hello people' },   // ডিফল্ট ভ্যালু
  category: {
    type: String,
    enum: ['personal', 'work', 'study', 'coding'],      // শুধু এই চারটা category হবে
    default: 'work'
  },
  pinned: {
    type: Boolean,
    default: false
  },
  tags: [                                               // একাধিক tag সাপোর্ট করবে
    {
      label: { type: String, required: true },          // label অবশ্যই দিতে হবে
      color: { type: String, default: "Red" }           // ডিফল্ট color লাল
    }
  ]
})


const Note  = model("Note", nodeSchema)

app.post('/note/create-post', async (req:Request, res:Response)=>{

     const body = req.body

//    approceh 1 create note 
     //  const myNote  = new Note({
     //      title:"hello devloper",
     //      content:"hi you more  learn dev and  app and  project"
     //  })

     //  await myNote.save()

     //    approceh 2 create note 

     const note = await Note.create(body)

      res.status(201).json({
           success: true,
           message:"succesfully create note  app",
           note: note
      })
})


app.get('/note', async (req:Request, res:Response)=>{

      const notes = await Note.find()

      res.status(201).json({
           success: true,
           message:"succesfully get note  app",
           note: notes
      })
})

app.get('/note/:nodeId', async (req:Request, res:Response)=>{


      const nodeId = req.params.nodeId
      const notes = await Note.findById(nodeId)

      res.status(201).json({
           success: true,
           message:"succesfully get note  app",
           note: notes
      })
})

app.get('/',(req:Request, res:Response)=>{
     res.send("welcome to Note App")
})

export default app 