(function(database){
   
var storyRepo  = require('./storyRepo');


database.init = function(pool){
    storyRepo.init(pool);
}
 

})(module.exports)