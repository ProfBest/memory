(function(storyController){

    var path = '/story/';
    var storyRepo = require('../data/storyRepo');

        storyController.init = function(app){
        console.log('story controller init');

        app.get( "/story/",function(req,res){
            res.send("welcome to the stories " + req.params.id);
        });

        app.get( "/story/:id",function(req,res){
            storyRepo.getUserStories(req.params.id,function(err,results){
                console.log('get user stories');
                res.json(results);
            });

            //res.send(data);
        });

        app.post('/story/', function(req,res){
            console.log(req.body);
            storyRepo.add(req.body);
            res.send("you submitted a " + req.body.title);
        });
    }

})(module.exports)