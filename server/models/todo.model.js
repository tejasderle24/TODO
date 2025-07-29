import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    category: { type: String, default: "Personal" },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
)

export default mongoose.model("Todo", todoSchema)
