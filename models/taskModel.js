import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
});

export default mongoose.model("tasks", taskSchema);
