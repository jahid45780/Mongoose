import { model, Schema } from "mongoose"
import { INotes } from "../interface/note.interface"

const nodeSchema = new Schema <INotes> (
     {
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
},
 {timestamps: true }
)


 export const Note  = model <INotes> ("Note", nodeSchema)