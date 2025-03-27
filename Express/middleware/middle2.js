function middleware2(req,res,next){
    console.log("This is the second middleware")
    next()
}

module.exports = middleware2