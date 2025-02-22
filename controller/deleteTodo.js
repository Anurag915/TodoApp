const Todo=require('../models/Todo');

exports.deleteTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Todo.findByIdAndDelete({_id:id});
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            });
        }else{
            res.status(200).json({
                success:true,
                message:"Todo deleted successfully"
            });
        }
    }
   catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
};

