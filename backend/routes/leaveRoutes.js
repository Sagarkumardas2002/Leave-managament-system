const express = require("express");
const router = express.Router();
const Leave = require("../models/Leave");

// Submit leave request
router.post("/", async (req, res) => {
    try {
        const leave = new Leave(req.body);
        await leave.save();
        res.status(201).json(leave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fetch all leave requests
router.get("/", async (req, res) => {
    try {
        const leaves = await Leave.find().sort({ createdAt: -1 });
        res.json(leaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update leave status
router.put("/:id", async (req, res) => {
    try {
        const updatedLeave = await Leave.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedLeave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
