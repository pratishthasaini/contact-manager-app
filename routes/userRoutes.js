const express = require('express');
const router = express.Router();
const {registerUser, loginUser, currentUser, deleteUser} = require("../controllers/userController");

// router.route("/register").post(registerUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);
router.delete("/:id", deleteUser);

// or we can write as router.post("/current",post((req, res)=>{
    // res.json({message : "hello"})}))

module.exports = router;
