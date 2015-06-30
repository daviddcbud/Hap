
var config={};

config.viewEngines=
{
    html: require('handlebars')
}

config.port= process.env.PORT || 3000;


module.exports=config;