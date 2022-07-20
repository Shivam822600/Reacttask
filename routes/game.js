var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer')
/* GET home page. */

router.post('/gamesinterface',upload.any(), function(req,res, next) {
pool.query("insert into games (categoryid,subcategoryid,gamename,description,price,stock,rented,rentamt,discount,icon)values(?,?,?,?,?,?,?,?,?,?)",
[req.body.categoryid,req.body.subcategoryid,req.body.gamename,req.body.description,req.body.price,req.body.stock,req.body.rented,req.body.rentamt,req.body.discount,req.files[0].originalname],function(error,result){

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

    pool.query("select * from games",function(error,result){
 
        if(error){

         res.status(500).json([])

       }

        else{

            res.status(200).json(result)
        }


 })
})

router.post('/editicon',upload.single('icon'), function(req, res, next) {
    pool.query("update games set icon=? where gameid=?",[req.file.originalname,req.body.gameid],function(error,result){
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
     router.post('/editgame', function(req, res, next) {
            pool.query("update games set categoryid=?,subcategoryid=?,gamename=?,description=?,price=?,stock=?,rented=?,rentamt=?,discount=?where gameid=?",[req.body.categoryid,req.body.subcategoryid,req.body.gamename,req.body.description,req.body.price,req.body.stock,req.body.rented,req.body.rentamt,req.body.discount,req.body.gameid],function(error,result){
            
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
            
            
router.post('/deletegame', function(req, res, next) {
 pool.query(
" delete from games  where gameid=?",[req.body.gameid],function(error,result){
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

            
            router.get('/gamesoffers',function(req,res) {

                pool.query("select * from games where discount>0",function(error,result){
                  
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

            router.post('/displayallgamebysubcategoryid',function(req,res){
                pool.query("select * from games where subcategoryid=?",[req.body.subcategoryid],function(error,result){
                            
                if(error){
                           
                res.status(500).json([])
                           
                }
                           
               else{
                           
               res.status(200).json(result)
                  }
                           
                           
               })
                 })  
module.exports = router;