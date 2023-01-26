import { Router } from "express";

const router = Router();
/**
 * Home
 */
router.get("/home", (req, res) => {
  res.json({ message: "home" });
});

export default router;
