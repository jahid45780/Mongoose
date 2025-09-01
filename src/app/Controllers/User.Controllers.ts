import express, { Request, Response } from "express"
import { User } from "../Models/user.model"


 export const userRouter  = express.Router()

 userRouter.post('/create-user', async (req:Request, res:Response)=>{
 
      const body = req.body 
      const user = await User.create(body)
 
       res.status(201).json({
            success: true,
            message:"SuccessFully create User",
            note: user
       })
 })

 userRouter.get('/', async(req:Request, res:Response)=>{
      const users = await User.find()

      res.status(201).json({
           success: true,
            message:"SuccessFully found User",
            note: users
      })
 })


 userRouter.get('/:userId', async(req:Request, res:Response)=>{
        const userId = req.params.userId
        const SingleUser = await User.findById(userId)

          res.status(201).json({
           success: true,
            message:"SuccessFully found single User",
            note: SingleUser
      })

 })


 userRouter.patch('/:userId', async(req:Request, res:Response)=>{
     const userId = req.params.userId
      const UserBody = req.body 
      const userUpdate = await User.findByIdAndUpdate(userId, UserBody, {new:true})

       res.status(201).json({
           success: true,
            message:"SuccessFully update",
            note: userUpdate
      })

 })

  userRouter.delete('/:userId', async(req:Request, res:Response)=>{
     const userId = req.params.userId
      const userDelete = await User.findByIdAndDelete(userId)

       res.status(201).json({
           success: true,
            message:"SuccessFully delete",
            note: userDelete
      })

 })