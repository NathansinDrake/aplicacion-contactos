// se hace el import de mysql 
import mysql from 'mysql'

// se crea la conexion
const conector = mysql.createConnection(
    {
host: 'localhost',
user: 'enrique', 
password: '',
database: 'proyecto'
}
)

const conectar = () => {
    conector.connect (err => {
        if(err) throw err
        console.log('conectado') 
    })
}


const agregarContacto =  (nombre, numero) =>{
    const sql = `INSERT INTO AGENDA (id_agenda, numero_contacto, nombre_contacto) VALUES (${null},${numero},"${nombre}" )`
    conector.query(sql, function(err, result, filed){
        if (err) throw err
        console.log(result)
    })
}
 
export {conectar, agregarContacto}