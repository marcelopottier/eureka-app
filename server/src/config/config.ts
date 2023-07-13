module.exports = {
    port: 3333,
    db: {
        database: process.env.DB_NAME || 'eureka_db',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASSWORD || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    }
}