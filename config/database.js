module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'mage'),
      user: env('DATABASE_USERNAME', 'mage'),
      password: env('DATABASE_PASSWORD', 'mage'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
