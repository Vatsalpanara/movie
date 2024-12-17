const express = require("express")
const route = express.Router();
const adminCtl = require("../controller/adminCtl")
const multer = require("../multer/multer")

route.get("/",adminCtl.HomePage)
route.get("/addpage",adminCtl.AddPage)
route.post("/send",multer,adminCtl.AddData)
route.get("/delete",adminCtl.DeleteData)
route.get("/edit",adminCtl.EditPage)
route.post("/update",multer,adminCtl.UpdateData)


module.exports = route