function middleware1(req,res,next){
    console.log("This is a custom Middleware")
    next()
}

module.exports = middleware1