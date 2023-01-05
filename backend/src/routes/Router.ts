import express from "express";
import routerPhoto from "./PhotoRoutes";
const router = express.Router();
import routerUser from "./UserRoutes";

router.use("/api/users", routerUser)
router.use("/api/photos", routerPhoto)

router.get("/", (req, res) => {
    res.send("API Working")
})

export default router;