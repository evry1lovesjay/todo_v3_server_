import express from "express"
import { register, login } from "../controllers/auth-controllers.js"
 
const router = express.Router()

router.post("/register", register)

router.post("/login", login)

router.get("/test", (req, res)=>{
    res.json("test successful!")
})

export default router