import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/todoRoutes.js"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const port = process.env.PORT

// const whiteList = ["http://127.0.0.1:5173", "http://localhost:3000"]
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

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose
  .connect(`${process.env.LOCAL_URL}`)
  .then(() =>
    app.listen(port, () =>
      console.log(`Database connected, app listening on port ${port}!!!`)
    )
  )
  .catch((err) => console.error(err))
// const db = mongoose.connection
// db.on("error", (error) => console.error(error))
// db.once("open", () => console.log("database connected"))

app.get("/", (req, res) => res.send("Hello World!"))
app.use("/", router)
