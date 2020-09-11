module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ed87eec228aa9d159b29c5d9bbdde7e0'),
    },
  },
});
