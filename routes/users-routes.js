import express from "express"
import {deleteUser, getUsers, getUser, updateUser } from "../controllers/user-controllers.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"


const router = express.Router()

// UPDATE
router.put("/:id", verifyUser ,updateUser)

// DELETE
router.delete("/:id",verifyUser ,deleteUser)

// GET
router.get("/:id", verifyUser, getUser)

// GET ALL
router.get("/", getUsers)

export default router