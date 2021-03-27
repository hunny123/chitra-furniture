 const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'ecomerce website',
        termsOfService: '',
        contact: {
            name: 'Hunny',
            email: 'hunny0402@yahoo.com',
           
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:5000/',
            description: 'Local server'
        },
        
    ],
    tags: [
        {
            name: 'status'
        }
    ],
    paths: {
        "api/v1/status": {
            "get": {
                tags: ['status'],
                description: "just for checking whether serve is live or not",
                responses: {
                    "200": {          
                        description: "server is alive",
                        
                    }
                }
            }
        }
    }
}
module.exports = swaggerDocument