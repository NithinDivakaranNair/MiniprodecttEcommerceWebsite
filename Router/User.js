const express=require("express")
const router=express.Router()
const usercontroller=require("../Controller/Usercontroller")
const multer=require('multer') //require multer middleware module

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// multer middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
   cb(null, 'Public/uploads/'); // Specify the destination folder
 },
 filename: (req, file, cb) => {
   // Generate a unique file name (you can use Date.now() or any other method)
   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
   cb(null, uniqueSuffix + '-' + file.originalname); //file path
   // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
 },
 });
 const upload = multer({ storage: storage }); // stored image detail

 

router.get("/mainhomepage",usercontroller.mainhomepage)
router.get("/signup",usercontroller.signup)
router.post("/signup",usercontroller.signupdata)
router.get("/login",usercontroller.login)
router.post("/login",usercontroller.loginpost)
router.get("/home",usercontroller.home)
router.get("/logout",usercontroller.logout)
 
router.get("/EmailEnteringPage",usercontroller.EmailEnteringPage)
router.post("/EmailPost",usercontroller.EmailPost)
router.get("/otp",usercontroller.otp)
router.post("/OTPPost",usercontroller.OTPPost)
router.get("/Newpassword",usercontroller.Newpassword)
router.post("/NewpasswordPost",usercontroller.NewpasswordPost)

router.get("/categorybasedrender/:CategoryId",usercontroller.categorybasedrender) //category based rendering route

router.get("/oneprodectdetails/:prodectId",usercontroller.oneprodectdetails)

router.get("/cartpage/:prodectId",usercontroller.cartpage)
router.get("/cartpagedetails",usercontroller.cartpagedetails)
router.get("/CartPluseButton/:prodectId",usercontroller.CartPluseButton)
router.get("/CartMinusebutton/:prodectId",usercontroller.CartMinusebutton)

router.get("/checkoutpage",usercontroller.checkoutpage)
router.get("/IteamRemoveCart/:iteam",usercontroller.IteamRemoveCart)

router.get("/userprofile",usercontroller.userprofile)

router.post("/AddAddress",usercontroller.AddAddress)

router.get("/ordersucessful",usercontroller.ordersucessful)

router.post("/ordersuccessfulPOST",usercontroller.ordersuccessfulPOST)
module.exports = router 