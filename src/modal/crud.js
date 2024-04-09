import getConnection from "../database/database.js";
// Get 1

export  const getItem =async (id,table) => {
    try {
        const conn = await getConnection()
        var sql = `SELECT * FROM ${table} WHERE id = ${id};`; 
        const result = await conn.query(sql);
        return result;
      } catch (error) {
        console.log(error)
      }     
    } ;
      

//Get 1+
export const getListItem = async (field, table) => {
    try {
        const conn = await getConnection()
        var sql = `SELECT * FROM ${table} WHERE ${Object.keys(field)} = "${Object.values(field)}";`
        const result = await conn.query(sql);
        return result;
    } catch (error) {
        console.log(error)
    }
}

const updateItem = async (table, infor, index) => {
        const columns = Object.keys(infor);
        const values = Object.values(infor);
    try {
        let sql = `UPDATE ${table} SET ${columns.join(' = ? , ')} = ? WHERE id = ${index+1} ;  `;
        const conn = await getConnection()
        conn.query(sql,values,(error, result, fields) =>{             
        });
    } catch (error) {
        console.log(error)
    }
}

export default updateItem;
