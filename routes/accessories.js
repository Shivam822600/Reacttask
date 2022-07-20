var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer')
/* GET home page. */

router.post('/accessory',upload.any(), function(req,res, next) {
pool.query("insert into accessories (categoryid,subcategoryid,accessoryname,description,price,stock,rented,rentamt,discount,icon)values(?,?,?,?,?,?,?,?,?,?)",
[req.body.categoryid,req.body.subcategoryid,req.body.accessoryname,req.body.description,req.body.price,req.body.stock,req.body.rented,req.body.rentamt,req.body.discount,req.files[0].originalname],function(error,result){

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
router.get('/displayall',function(req,res){

    pool.query("select * from accessories",function(error,result){
 
        if(error){

         res.status(500).json([])

       }

        else{

            res.status(200).json(result)
        }


 })
})

router.post('/editicon',upload.single('icon'), function(req, res, next) {
    pool.query("update accessories set icon=? where accessoryid=?",[req.file.originalname,req.body.accessoryid],function(error,result){
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
     router.post('/editaccessorydata', function(req, res, next) {
            pool.query("update accessories set categoryid=?,subcategoryid=?,accessoryname=?,description=?,price=?,stock=?,rented=?,rentamt=?, discount=? where accessoryid=?",[req.body.categoryid,req.body.subcategoryid,req.body.accessoryname,req.body.description,req.body.price,req.body.stock,req.body.rented,req.body.rentamt,req.body.discount,req.body.accessoryid],function(error,result){
            
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
            
            
router.post('/deleteaccessory', function(req, res, next) {
 pool.query(
" delete from accessories  where accessoryid=?",[req.body.accessoryid],function(error,result){
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


    router.get('/accessoriesoffers',function(req,res) {

                pool.query("select * from accessories where discount>0",function(error,result){
                  
                    if(error)
                    {
                        res.status(500).json([])
                    }
                    else
                    {
                       
                        res.status(200).json(result)
                    }
                })
              //res.render('index', { title: 'Express' });
            });
            router.post('/displayallaccessorybysubcategoryid',function(req,res){
                pool.query("select * from accessories where subcategoryid=?",[req.body.subcategoryid],function(error,result){
                            
                if(error){
                           
                res.status(500).json([])
                           
                }
                           
               else{
                           
               res.status(200).json(result)
                  }
                           
                           
               })
                 })  
module.exports = router;