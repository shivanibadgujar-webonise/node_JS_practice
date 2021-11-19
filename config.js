const env = process.env;

const config = {
    db: {
    host: env.DB_HOST || "localhost",
    user: env.DB_USER || "newuser",
    password: env.DB_PASSWORD || "Shivani@97",
    database: env.DB_NAME || "employees",
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false,
},

listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;

