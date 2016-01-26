module.exports = {
    development: {
        backendBaseUrl: 'http://localhost:8080',
        apiBaseUrl: 'http://localhost:8080/api/v1/'
    },
    vagrant: {
        backendBaseUrl: 'http://192.168.33.10',
        apiBaseUrl: 'http://192.168.33.10/api/v1/'
    },
    staging: {
        backendBaseUrl: 'http://fenwick-web-server.westus.cloudapp.azure.com',
        apiBaseUrl: 'http://fenwick-web-server.westus.cloudapp.azure.com/api/v1/'
    },
    production: {
        backendBaseUrl: 'http://api.production.com',
        apiBaseUrl: 'http://api.production.com/api/v1/'
    },
    ari: {
        backendBaseUrl: 'http://10.140.1.28:8081',
        apiBaseUrl: 'http://10.140.1.28:8081/api/v1'
    }
};

