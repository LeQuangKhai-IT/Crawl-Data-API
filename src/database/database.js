import mysql from 'mysql2/promise';

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'webcraw'
})

const getConnection = () =>{
   return conn;
}

export default getConnection;