import dotenv from "dotenv";
import * as fs from "fs";

if (fs.existsSync(".env")) {
    console.log("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'
export const MONGODB_URI = process.env["MONGODB_URI"];
export const MONGODB_NAME = process.env["MONGODB_NAME"];
export const JWT_LOGIN_SECRET = process.env.JWT_LOGIN_SECRET;
export const thehuxley_username = process.env.thehuxley_username;
export const thehuxley_password = process.env.thehuxley_password;

if (!MONGODB_URI) {
    console.error("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}