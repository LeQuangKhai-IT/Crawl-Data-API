import getConnection from "../database/database.js";
// Get 1
const getItem = async (id,table) => {
    try {
        const conn = await getConnection()
        const result = await conn.query(`SELECT * FROM ${table} WHERE id = ${id};`);

        return result;
    } catch (error) {
        console.log(error)
    }
}

//Get 1+
const getListItem = async (field, table) => {
    try {
        const conn = await getConnection()
        const result = await conn.query(`SELECT * FROM ${table} WHERE ${Object.keys(field)} = ${Object.values(field)};`);

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