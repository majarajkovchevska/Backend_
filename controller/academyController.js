const Academy = require("../pkg/Models/academySchema")

exports.createAcademy = async (req, res) => {
    try {
        const newAcademy = await Academy.create(req.body)
        res.status(201).json({
            status: "success",
            data: {
                academy: newAcademy
            },
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            messages: "error"
        })
    }
}

exports.getAllAcademy = async (req, res) => {
    try {

        const queryObj = { ...req.query };
        let queryString = JSON.stringify(queryObj);

        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        const query = JSON.parse(queryString);
        const academy = await Academy.find(query);

        res.status(200).json({
            status: "Success",
            data: {
                academy: academy,
            },
        });


    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: "Error",
        });
    }
};


exports.getAcademy = async (req, res) => {
    try {
        const academy = await Academy.findById(req.params.id)
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

exports.updateAcademy = async (req, res) => {
    try {
        const updateAcademy = await Academy.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "Success",
            data: {
                updatedAcademy,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            messages: err,
        })
    }
}

exports.deleteAcademy = async (req, res) => {
    try {
        await Academy.findByIdAndDelete(req.params.id);

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