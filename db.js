import pg from 'pg'

const Pool = pg.Pool

const pool = new Pool({
	connectionString: "postgres://default:IgYLfWVF6v5b@ep-lively-tooth-a4x41r93-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

// const pool = new Pool({
// 	database: process.env.POSTGRES_DATABASE,
// 	host: process.env.POSTGRES_HOST,
// 	port: 5432,
// 	user: "default",
// 	password: "",
// });

pool.connect();

export default pool
