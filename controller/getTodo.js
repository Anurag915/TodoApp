const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({}).lean(); // Better performance
    if (!todos.length) {
      return res.status(404).json({
        success: false,
        message: "No todos found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All todos fetched successfully",
      data: todos,
    });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
exports.getTodoById = async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:todo
        });
    }
    catch(err){
        console.error("Error fetching todo:",err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:err.message
        });
    }   
};
