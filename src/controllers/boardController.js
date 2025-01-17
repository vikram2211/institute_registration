import board from "../models/boardSchema.js";

const createBoard = async (req, res) => {
  try {
    let { boardName,instituteId } = req.body;
    // console.log(instId);

    let newBoard = new board({
        boardName: boardName,
        institute_id:instituteId
    });
    await newBoard.save();
    return res.status(201).json({ message: "Board created successfully" });
  } catch (error) {
      console.log(error);
    return res.status(500).json({ message: "Error" });
  }
};

const getBoard = async (req, res) => {
    try {
      let getBoards = await board.find().populate({path:'institute_id'});
      return res
        .status(200)
        .json({ message: "Boards found successfully", data: getBoards });
    } catch (error) {
        console.log(error);
      return res.status(500).json({ message: "Error" });
    }
  };

export { createBoard ,getBoard};
