import jwt from "jsonwebtoken";


// admin authentication middleware
const authAdmin = (req, res, next) => {

    try {
        console.log("Auth Admin Middleware Reached");
        const {atoken} = req.headers
        console.log("Token received:", atoken);
        if(!atoken)
        {
            return res.json({success:false,message: "Not Authorized Login Again "})
        }

        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
        {
            return res.json({success:false,message: "Not Authorized Login Again "})
        }

            next()


    } catch (error) {
         console.log(error);
                res.json({success: false, message: error.message})
    }
}

export default authAdmin;