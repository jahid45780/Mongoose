import { model, Schema } from "mongoose"
import validator from 'validator';
import { IAddress, IUser } from "../interface/user.interface"

const addressSchema = new Schema<IAddress>({
    city:{type: String},
    street:{type: String},
    zip:{type: Number}
},{
   _id:false
})
 
const userSchema = new Schema <IUser>({
      firstName: {
         type:String,
         required:[true, 'plz firstName daw']
      },
      lastName:{
         type:String,
         required:true,
         trim:true
      },
      age:{
         type:Number,
         required:true,
         min:[18, 'plz provied 18 age {VALUE}'],
         max:60
      },
      email:{
         type:String,
         required:true,
         unique:true,
          trim:true,
          validate:[validator.isEmail, 'Invalid email sent']
      },
      password:{
         type:String,
         required:true,
          trim:true
      },
      role:{
         type:String,
         enum:{
            values:['user', 'admin'],
            message:'ROLE IS NOT VALID'
         },
         default:'user'
      },
      address:{
         type:addressSchema
      }
},{
   versionKey:false,
   timestamps:true
})

 export const User = model("User", userSchema)  