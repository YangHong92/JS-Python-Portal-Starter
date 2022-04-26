const dbClient = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '1234567890',
        port: '3306'
    }
}

const database = {
    prod: 'prod',
    dev: 'dev'
}

const pythonApi = 'http://localhost:8000/foo'

module.exports = {
    dbClient,
    database,
    pythonApi
}