const Todo=require('../models/Todo');

exports.createTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const response=await Todo.create({
            title,
            description
        });
        res.status(201).json({data:
            {
                title:response.title,
                description:response.description,
                success:true,
                message:"Entry created successfully"
            }
        });
    }
   catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
};

