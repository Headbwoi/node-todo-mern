import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/todoRoutes.js"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const port = process.env.PORT

// const whiteList = ["http://127.0.0.1:5173/", "http://localhost:3000"]
// const corsOption = {
//   origin: (origin, callback) => {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error("not allowed by CORS"))
//     }
//   },
//   optionSuccessStatus: 200,
// }
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todo-database")
const db = mongoose.connection
db.on("error", (error) => console.errpr(error))
db.once("open", () => console.log("database connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", router)
app.listen(port, () => console.log(`Example app listening on port ${port}!!!`))
