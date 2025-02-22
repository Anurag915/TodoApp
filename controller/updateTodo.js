const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const {title,description}=req.body;
    await Todo.findByIdAndUpdate({ _id: id }, {title,description,updatedAt:Date.now()});
    if (!Todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
    });
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
