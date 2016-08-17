var gulp = require('gulp');
var server = require('gulp-develop-server');

gulp.task('server:start', function(){
    server.listen({path: './server.js'});
})

gulp.task('server:restart', function(){
    gulp.watch(['./server.js','./controllers/*.js','./data/*.js'],server.restart);
})

gulp.task('default',['server:start'],function(){
     gulp.watch(['./server.js','./controllers/*.js','./data/*.js'],server.restart);
});