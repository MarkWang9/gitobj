var express=require('express');

var path=require('path')
var favicon=require('serve-favicon');

var app=express();

//引入body-parser中间件
app.use(require('body-parser')());

app.set('port',process.env.PORT||3006);

//静态资源
app.use(express.static(__dirname+'/public'));



//配置路由
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style="color:green">Welcome to My site.</span>');
})


//网站图标
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

//定制404页面
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404 - Not Found</span>')
})

//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500-Server Error');
})

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-c to terminate.');
})
