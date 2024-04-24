import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/users";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

export default router;
