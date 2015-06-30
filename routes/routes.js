var routes=[];

function Route(method,path,handler){
    this.method=method;
    this.path=path;
    this.handler=handler;
    routes.push(this);
}

//route to handle requests for public assets like css and js files
route=new Route('GET','/public/{path*}', 
                {
                    directory:
                    {
                        path: './public',
                        listing: false
                
                    }
                });


var route=new Route('GET','/favicon.ico',
                    function (req, reply) {
                        reply.file('./favicon.ico');
                    });

var route=new Route('GET','/',
                    function (req, reply) {
                        reply.view('layout');
                    });

var controller= require('../controllers/index');
route=new Route('GET','/{name}', 
                   controller.nameHandler);

route=new Route('POST','/test', controller.namePostHandler);




module.exports= routes;
