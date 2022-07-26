var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer')
/* GET home page. */

router.post('/adddata',upload.any(), function(req, res, next) {
    console.log(req.body)
    console.log(req.files)
    var q="insert into accessorypicture (categoryid,subcategoryid,accessoryid,icon)values ?"
   pool.query(q,[req.files.map((item)=>
    [
        req.body.categoryid,
        req.body.subcategoryid,
        req.body.accessoryid,
        item.originalname
        
    ]),],
    function(error,result){
       console.log(req.body)
        if(error)
        {console.log(error)
            res.status(500).json({result:false})
        }
        else
        {
            console.log(result)
            res.status(200).json({result:true})
        }
    })
  
});
router.get('/displayall',function(req,res){

    pool.query("select * from accessorypicture",function(error,result){
 
        if(error){

         res.status(500).json([])

       }

        else{

            res.status(200).json(result)
        }


 })
})

router.post('/editicon',upload.single('icon'), function(req, res, next) {
    pool.query("update accessorypicture set icon=? where imageid=?",[req.file.originalname,req.body.imageid],function(error,result){
    console.log(req.body)
    if(error)
    {console.log(error)
        res.status(500).json({result:false})
    }
    else
    { console.log(result)
        res.status(200).json({result:true})
    }
    }) 
    });  
     router.post('/editdata', function(req, res, next) {
            pool.query("update accessorypicture set categoryid=?,subcategoryid=?,accessoryid where imageid=?",[req.body.categoryid,req.body.subcategoryid,req.body.accessoryid,req.body.imageid],function(error,result){
            
            if(error)
            {console.log(error)
                res.status(500).json({result:false})
            }
            else
            { console.log(result)
                res.status(200).json({result:true})
            }
            }) 
            });  
            
            
router.post('/deletedata', function(req, res, next) {
 pool.query(
" delete from accessorypicture  where imageid=?",[req.body.imageid],function(error,result){
            console.log(result)
            if(error)
            {console.log(error)
                res.status(500).json({result:false})
            }
            else
            { 
                res.status(200).json({result:true})
            }
            }) 
            });


    
module.exports = router;