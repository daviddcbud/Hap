var Joi=require('joi');
var controller={};
var Boom=require('boom');
controller.nameHandler= function (req, reply) {
                        var encodedName = encodeURIComponent(req.params.name);
                        reply.view('index', {name: encodedName});
                    };


var schema= Joi.object().keys(
{
   name: Joi.string().min(3).required() 
});
 controller.namePostHandler= function(req,reply){
   
     Joi.validate(req.payload,schema, function(err,val)
                 {
         console.log(err);
        reply(Boom.badRequest(err.details[0].message)); 
     });
     
 };

module.exports=controller;