const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.send("All fields required");
    const existing = await userModel.findOne({ email });
    if (existing) return res.send("Email already registered");

    const hashed = await bcrypt.hash(password, 10);
    await userModel.create({ username, email, password: hashed });
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.send("Registration failed");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.send("Invalid credentials");
    }
    req.session.userId = user._id;
    res.redirect("/home");
  } catch (err) {
    res.send("Login failed");
  }
};


const createUser = async (req, res) => {
  try {
    const { username, email, age } = req.body;

    if (!username || !email || !age) {
      return res.send("All fields are required");
    }

    await userModel.create({ username, email, age });

    res.redirect("/home");
  } catch (error) {
    console.log("Create User Error:", error.message);
    res.send("Failed to create user");
  }
};

module.exports = { createUser };


const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send("Logout failed");
    res.redirect("/login");
  });
};

const home = async (req, res) => {
  const users = await userModel.find();
  const user = await userModel.findById(req.session.userId);
  res.render("home", { users, username: user.username });
};

const editUserForm = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.render("editUser", { user });
};

const updateUser = async (req, res) => {
  const { username, email, age } = req.body;
  await userModel.findByIdAndUpdate(req.params.id, { username, email, age });
  res.redirect("/home");
};

const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.redirect("/home");
};

const registerform = (req, res) => res.render("register");
const loginform = (req, res) => res.render("login");

module.exports = {
  register, login, createUser, logout, home,
  registerform, loginform,
  editUserForm, updateUser, deleteUser
};
