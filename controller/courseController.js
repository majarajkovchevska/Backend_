const Course = require("../pkg/Models/courseSchema")

exports.createCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                course: newCourse
            },
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            messages: "error"
        })
    }
}

exports.getAllCourses = async (req, res) => {
    try {

        const queryObj = { ...req.query };

        //ovoj objket go konvertirame vo string
        let queryString = JSON.stringify(queryObj);

        // go konvertime vo string poradi sto mozeme da upotrebime metoda replace so koja metoda kje modificirame
        // go modificirame stringot

        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        const query = JSON.parse(queryString);
        const course = await Course.find(query);

        res.status(200).json({
            status: "Success",
            data: {
                course: course,
            },
        });


    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: "Error",
        });
    }
};


exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        res.status(200).json({
            satatus: "Success",
            data: {
                course,

            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })

    }
}


exports.updateCourse = async (req, res) => {
    try {
        const updateAcademy = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "Success",
            data: {
                updatedCourse,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "Success",
            data: null,
        })

    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}