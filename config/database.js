// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'http://139.59.145.204'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'fawra'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'password'),
//       },
//       options: {
//         ssl: false,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
