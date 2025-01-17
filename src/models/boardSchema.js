import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    boardName: {
      type: String,
      required: true,
    },
    institute_id: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: "institute",
    //   required: true,
    },
  },
  { timestamps: true }
);

const board = mongoose.model("board", boardSchema);

export default board;
