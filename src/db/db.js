import mongoose from "mongoose";

const connection = async () => {
  mongoose
    .connect(
      "mongodb+srv://vikramkurbur30:oRsdGS9aasLglZhu@cluster0.7cyxh.mongodb.net/registerInst?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default connection;
