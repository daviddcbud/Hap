module.exports= function(server){


server.register(
    {
        register: require('good'),
        options: {
            opsInterval: 5000,
            reporters: [
                {
                    reporter: require('good-file'),
                    events: { ops: '*'},
                    config: {
                        path: './logs',
                        prefix: 'hapi-process',
                        rotate: 'daily'
                    }
                },
                {
                    reporter: require('good-file'),
                    events: { response: '*'},
                    config: {
                        path: './logs',
                        prefix: 'hapi-request',
                        rotate: 'daily'
                    }
                },
                {
                    reporter: require('good-file'),
                    events: { error: '*'},
                    config: {
                        path: './logs',
                        prefix: 'hapi-error',
                        rotate: 'daily'
                    }
                },
                
            ]
        }
    }, function(err){
        console.log(err);
    }
);

};