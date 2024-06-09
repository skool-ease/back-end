import dotenv from 'dotenv'
dotenv.config()

const appConstants = {
  PORT: process.env.PORT,
  HASURA_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
  HASURA_GRAPHQL_URL: process.env.HASURA_GRAPHQL_URL,
  APP_BASE_URL: process.env.APP_BASE_URL,
  SUPABASE_DB_KEY: process.env.SUPABASE_DB_KEY,
  SUPABASE_PUBLIC_ANON_KEY: process.env.SUPABASE_PUBLIC_ANON_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SMTP_KEY: process.env.SMTP_KEY,
  ROLES: {
    STAFF: 'STAFF',
    ADMIN: 'ADMIN'
  }
}

export default appConstants
