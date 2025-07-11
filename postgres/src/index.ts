import { Client } from "pg";


const pgClient = new Client({
    user:"neondb_owner", 
    password:"",
    port: 5432,
    host:"ep-odd-cell-adtr7q4o-pooler.c-2.us-east-1.aws.neon.tech",
    database:"neondb",
})

async function main() {
    await pgClient.connect();
}