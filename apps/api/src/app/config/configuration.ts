export default () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  database: {
    name: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: parseInt(process.env.JWT_EXPIRATION, 10),
  },
});
