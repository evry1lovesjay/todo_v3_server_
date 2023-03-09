import express from "express"
import { createTodo, getUserTodos, deleteUserTodo}  from "../controllers/todo-controllers.js"
// { , getTodos, updateTodo, }
import { verifyAdmin } from "../utils/verifyToken.js"


const router = express.Router()

// CREATE
router.post("/new/:userid", createTodo)

// // UPDATE
// router.put("/:id", updateTodo)

// // DELETE
router.delete("/delete/:id", deleteUserTodo)

// GET ALL FILTERED
router.get("/retrieve/:userid", getUserTodos)

// // GET ALL
// router.get("/", getTodos)


export default router