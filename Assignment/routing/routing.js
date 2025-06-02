const express = require("express");
const router = express.Router();
const {
  register, login, logout, home,createUser,
  registerform, loginform,
  editUserForm, updateUser, deleteUser
} = require("../controller/controller");

const { isAuthenticated } = require("../middleware/auth");

router.get("/", (req, res) => res.redirect("/login"));
router.get("/register", registerform);
router.post("/register", register);
router.get("/login", loginform);
router.post("/login", login);
router.post("/logout", logout);

router.get("/home", isAuthenticated, home);
router.post("/home/create", isAuthenticated,createUser);
router.get("/home/:id/edit", isAuthenticated,editUserForm);
router.post("/home/:id/update", isAuthenticated,updateUser);
router.post("/home/:id/delete", isAuthenticated,deleteUser);

module.exports = router;
