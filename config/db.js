import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "6648",
  port: "3306",
  database: "productdb",
});

export { pool };
