import dotenv from "dotenv"

dotenv.config()

export const my_env_var_val = {
NODE_ENV: process.env.NODE_ENV,
PORT: process.env.PORT,
DB: process.env.DB_URL
} 