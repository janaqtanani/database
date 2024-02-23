const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
app.get('/',function(req,res)
{
    res.send("start server")
})
app.get('/getData',function(req,res)
{
  var data={name:"jana",age:"20",field:"cs"}
  res.json(data)
})
app.get('/getPrices',function(req,res)
{
  var prices={price1:"20",price2:"44",price3:"66",price4:"77"}
  res.json(prices)
})


app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});




var server=app.listen(9000,function(){

    var host= server.address().address
    var port=server.address().port
})