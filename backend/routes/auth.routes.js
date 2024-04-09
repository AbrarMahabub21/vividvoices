import express from "express";

const router = express.Router();

router.get("/signup");
router.get("/login");
router.get("/signout");

export default router;
