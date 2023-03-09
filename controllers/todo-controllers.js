import User from "../models/User-models.js"
import Todo from "../models/Todo-models.js"
import {createError} from "../utils/error.js"


// CREATE TODO------------------------------------------------------
export const createTodo = async (req, res, next) => {

    const userId = req.params.userid
    const newTodo = new Todo(req.body)

    try{
        const savedTodo = await newTodo.save()
        const savedTodoId = savedTodo._id
        try{
            await Todo.findByIdAndUpdate(savedTodoId, {$push: {userid: userId},
            })
        }catch(err){
            next(err)
        }
        res.status(200).json(savedTodo)
    }catch(err){
        next(err)
    }
}

// GET TODO----------------------------------------------------------
export const getUserTodos = async (req, res, next)=>{

    const userParamsId = req.params.userid
    try{
        const todos = await Todo.find({userid:{$eq: userParamsId}})
        res.status(200).json(todos)
    }catch(err){
        next(err)
    }
}

export const deleteUserTodo = async (req, res, next)=>{
    const hotelId = req.params.hotelId   

    try{
        await await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json("Task has been deleted!!!....")

    }catch(err){
        next(err)
    }
}



// export const updateRoom = async (req, res, next)=>{    
        
//     try{
//         const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
//         res.status(200).json(updatedRoom)
//     }catch(err){
//         next(err)
//     }
// }


// // app.delete("/todos/delete/:id", async(req, res) => {
// //     const result = await Todo.findByIdAndDelete(req.params.id)

// //     res.json(result)
// // })

// // app.get("/todos/complete/:id", async (req, res)=> {
// //     const todo = await Todo.findById(req.params.id)

// //     todo.complete = !todo.complete
    
// //     todo.save()

// //     res.json(todo)
// // })


