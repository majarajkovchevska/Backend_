const express = require("express");
const db = require("./pkg/db/index");
const courseController = require("./controller/courseController")
const academyController = require("./controller/academyController")

const app = express()
db.init()
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/course", courseController.createCourse)
app.get("/course", courseController.getAllCourses)
app.patch("/course/:id", courseController.updateCourse)
app.delete("/course/:id", courseController.deleteCourse)

app.post("/academy", academyController.createAcademy)
app.get("/academy", academyController.getAllAcademy)
app.patch("/academy/:id", academyController.updateAcademy)
app.delete("/academy/:id", academyController.deleteAcademy)

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log("Could not start service");
    }
    console.log(`Service started successfully on port ${process.env.PORT}`);
});