import express from "express";
const router = express.Router();
import routerUser from "./UserRoutes";

router.use("/api/users", routerUser)

router.get("/", (req, res) => {
    res.send("API Working")
})

export default router;