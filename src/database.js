import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/mongodbgraphql", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>>> DB Connected");
  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}
