var express = require("express");
var router = express.Router();
var pool = require("./pool.js");
/* GET users listing. */
router.post("/checkusermobilenumber", function (req, res, next) {
  pool.query(
    "select * from twitter where mobileno=?",
    [req.body.mobileno],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ result: false });
      } else {
        if (result.length == 1)
          res.status(200).json({ result: true,data: result[0] });
        else res.status(200).json({ result: false });
      }
    }
  );
});
router.post("/insertdata", function (req, res, next) {
  pool.query(
    "insert into twitter set emailid=?,mobileno=?,name=?,password=?,tweet=?",
    [
      req.body.emailid,
      req.body.mobileno,
      req.body.name,
      req.body.password,
      req.body.tweet,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({ result: false });
      } else {
        res.status(200).json({ result: true });
      }
    }
  );
});

router.get('/displayall',function(req,res){

    pool.query("select * from twitter",function(error,result){
 
        if(error){

         res.status(500).json([])

       }

        else{

            res.status(200).json(result)
        }


 })
})



module.exports = router;
