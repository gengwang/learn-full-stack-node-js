import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());

router.get("/videos", (req, res) => {
    res.send({predictions: {
        "person": 0.95,
        "potted-plant": 0.90,
        "chair": 0.80,
    }})
});

export default router;