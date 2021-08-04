import { UserController } from "./../controller/UserController";
import { Router } from "express";

const router = Router();

// Get all users
router.get("/", UserController.getAll);

// Get one user
router.get("/:id", UserController.getById);

// Create new user
router.post("/", UserController.newUser);

// Edit user
router.patch("/:id", UserController.editUser);

// Delete user
router.delete("/:id", UserController.deleteUser);

export default router;
