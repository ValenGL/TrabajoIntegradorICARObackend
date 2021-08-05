import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";

const router = Router();

//get all users
router.get("/", [checkJwt, checkRole(["admin"])], UserController.getAll);

//get one user
router.get("/:id", [checkJwt, checkRole(["admin"])], UserController.getById);

//creaate new user
router.post("/", UserController.newUser);

//edit user
router.patch("/:id", [checkJwt, checkRole(["admin"])], UserController.editUser);

//delete
router.delete(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  UserController.deleteUser
);

export default router;
