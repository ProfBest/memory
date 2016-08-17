(function(storyRepo){

    var database = {}
    storyRepo.init = function(pool){
        
        database = pool;
    }

    storyRepo.add = function(story){
       
        database.getConnection(function(err,connection){
            if(err){
                console.log(err);
                throw err;
            }

            connection.query('insert into story set ?',story,function(err, result){
                if(err){
                    console.log(err);
                    throw err;
                }
                console.log(result.insertId);
            });
        })
        
    }

    storyRepo.getUserStories = function(id,next){
        database.query('select * from story where user_id = ?', [id], function(err, results){
            if(err){
                
                console.log(err);
                next(err,null);
                throw err;
            }

            console.log(results);
            next(null, results);
            //return results;
        })
    }




})(module.exports)