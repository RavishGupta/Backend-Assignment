const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
const folder = require("../../../uploads");
	
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
	
let file_name;
let file_path;

module.exports.upload = async function(req,res){
    app.post("/uploadProfilePicture",function (req, res, next) {
         
     // Error MiddleWare for multer file upload, so if any
     // error occurs, the image would not be uploaded!
     upload(req,res,function(err) {
 
           if(err) {
 
               res.send(err);
           }
           else   {
 
             // SUCCESS, image successfully uploaded
			    file_name=req.file.filename;
			    file_path=req.file.path;
		    }
               res.send(200,{
				status: "ok",
				file_path:file_path
			
			   })
       })
      })
 }
let storage = multer.diskStorage({
	destination: function (req, file, cb) {

		// Uploads is the Upload_folder_name
		cb(null, path.join(__dirname,'..',folder));
	},
	filename: function (req, file, cb) {
	cb(null, file.fieldname + "-" + Date.now()+".jpg")
	}
})
	
	
var upload = multer({
	storage: storage,
	limits: { fileSize },
	fileFilter: function (req, file, cb){
	
		
		var filetypes = /jpeg|jpg|png/;
		var mimetype = filetypes.test(file.mimetype);

		var extname = filetypes.test(path.extname(
					file.originalname).toLowerCase());
		
		if (mimetype && extname) {
			return cb(null, true);
		}
	
		cb("Error: File upload only supports the "
				+ "following filetypes - " + filetypes);
	}

}).single("mypic");	

app.get("/",function(req,res){
	res.render("Signup");
})
	

	
// Take any port number of your choice which
// is not taken by any other process
app.listen(8080,function(error) {
	if(error) throw error
		console.log("Server created Successfully on PORT 8080")
})



