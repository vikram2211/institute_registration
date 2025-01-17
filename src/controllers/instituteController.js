import institute from "../models/instituteSchema.js";

const createInst = async (req, res) => {
  try {
    let { instName } = req.body;

    let newInst = new institute({
      institueName: instName,
    });
    await newInst.save();
    return res.status(201).json({ message: "Institute created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};
const getInst = async (req, res) => {
  try {
    let getInstitutes = await institute.find();
    return res
      .status(200)
      .json({ message: "Institute found successfully", data: getInstitutes });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

export { createInst, getInst };
