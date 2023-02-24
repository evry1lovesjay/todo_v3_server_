const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://todo_v3_renderdb_user:ASc00lAS_@@cluster0.emjbcyk.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected to DB...")).catch(console.err)

//using the model

const Todo = require("./models/todo")

app.get("/todos", async (req, res) => {
    const todos = await Todo.find()

    res.json(todos)
})

app.post("/todos/new", (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save()
    res.json(todo)
})

app.delete("/todos/delete/:id", async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result)
})

app.get("/todos/complete/:id", async (req, res)=> {
    const todo = await Todo.findById(req.params.id)

    todo.complete = !todo.complete
    
    todo.save()

    res.json(todo)
})

const PORT = process.env.PORT || 3001


app.listen(PORT, () => console.log (`Server started on port ${PORT}`))