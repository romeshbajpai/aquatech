const router = require("express").Router;
const usercontroller = require('../usercontroller/usercontroller.js')

router.route("/register").post(usercontroller.Login)
router.route("/login").post(usercontroller.Login)
