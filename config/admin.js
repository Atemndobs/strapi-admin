module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77adbbb7b648ef1aae89e55a16677bce'),
  },
});
