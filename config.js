exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://testuser:testpassword@ds161099.mlab.com:61099/mongblog';
exports.PORT = process.env.PORT || 8080;