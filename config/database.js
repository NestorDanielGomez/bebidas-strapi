module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdsehsaen0hlde1n3lb0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bebidasboutique'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'BskxuqioSJ8V1BBou02YjFe40VoF6Zbw'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
