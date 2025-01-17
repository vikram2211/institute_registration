import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema(
  {
    institueName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const institute = mongoose.model("institute", instituteSchema);

export default institute;
