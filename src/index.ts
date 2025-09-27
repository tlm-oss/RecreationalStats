import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import 'dotenv/config';

const url = process.env.DATABASE_URL;

if (!url) throw new Error('DATABASE_URL is not set');

const sql = neon(url);
const db = drizzle({ client: sql });

export default db;
