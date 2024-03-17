const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get("/", async (req, res) => {

    res.json({
        "Mesage": "In good health sir!"
    })
});
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://sthas479:yuvi1234567@cluster0.ucihlla.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.get("/", async (req, res) => {

    res.json({
        "Mesage": "In good health sir!"
    })
});
app.listen(3000, () => console.log('Server running on port 3000'));
