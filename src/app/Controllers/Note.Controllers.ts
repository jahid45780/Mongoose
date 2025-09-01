import express, { Request, Response } from "express"
import { Note } from "../Models/Note.Models"



 export const noteRoute = express.Router()

noteRoute.post('/create-post', async (req:Request, res:Response)=>{

     const body = req.body

//    noteRouteroceh 1 create note 
     //  const myNote  = new Note({
     //      title:"hello devloper",
     //      content:"hi you more  learn dev and  noteRoute and  project"
     //  })

     //  await myNote.save()

     //    noteRouteroceh 2 create note 

     const note = await Note.create(body)

      res.status(201).json({
           success: true,
           message:"succesfully create note  noteRoute",
           note: note
      })
})


noteRoute.get('/', async (req:Request, res:Response)=>{

      const notes = await Note.find()

      res.status(201).json({
           success: true,
           message:"succesfully get note  noteRoute",
           note: notes
      })
})

noteRoute.get('/:nodeId', async (req:Request, res:Response)=>{


      const nodeId = req.params.nodeId
      const notes = await Note.findById(nodeId)

      res.status(201).json({
           success: true,
           message:"succesfully get note  noteRoute",
           note: notes
      })
})

noteRoute.patch('/:nodeId', async (req:Request, res:Response)=>{

      
      const nodeId = req.params.nodeId
       const updateBody = req.body
      const notes = await Note.findByIdAndUpdate(nodeId, updateBody, {new:true})
     
      res.status(201).json({
           success: true,
           message:"succesfully update note  noteRoute",
           note: notes
      })
})


noteRoute.delete('/:nodeId', async (req:Request, res:Response)=>{

      
      const nodeId = req.params.nodeId
      const notes = await Note.findByIdAndDelete(nodeId)
     
      res.status(201).json({
           success: true,
           message:"succesfully delete note  noteRoute",
           note: notes
      })
})

