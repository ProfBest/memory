(function(controllers){
    
    var storyController = require('./storyController');
    
    controllers.init = function(app){
        storyController.init(app);

    }
})(module.exports)