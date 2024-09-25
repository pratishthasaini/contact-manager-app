const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// @desc register user
// @route POST /api/users/register
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("invalid details");
  }
  const unavailable = await User.findOne({ email });
  res.json(unavailable);
  if (unavailable) {
    res.status(400);
    throw new Error("email already in use");
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user info is not valid");
  }
  res.json({ message: "registered successfully" });
});

// @desc register user
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("invalid details");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { user: { id: user.id, email: user.email } },
      process.env.ACCESS_TOKEN,
      {expiresIn : "1m"}
    );
    res.status(200).json({token})
  }
  else{
    res.status(401);
    throw new Error("invalid email or password");
  } 
  res.json({ message: "user logged in successfully" });
});

// @desc current user
// @route POST /api/users/current
// access PRIVATE
const currentUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.json(user);
});

// @desc delete user
// @route POST /api/users/:id
// @access PUBLIC
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.deleteOne();
  res.json({ message: "user deleted successfully" });
});

module.exports = { registerUser, loginUser, currentUser, deleteUser };
