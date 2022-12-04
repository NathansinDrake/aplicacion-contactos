import express from 'express' //importacion de Express 
import { conectar, agregarContacto} from './src/mysql_conector.js'
const app = express() //iniciamos Express
//inicar configuracion
app.listen('8000', function() {
    console.log('aplicacion inicializada en el puerto 8000')
})
//configuracion de pug
app.set('views', './vistas')
app.set('view engine','pug')

//configuracion de archivos estaticos 
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))
 

app.get('/', function(req, res){
    res.render('index', {titulo:'aplicacion de contactos'})
     
})

app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero  
    agregarContacto(nombre, numero)
    res.redirect('/')
    console.log (nombre, numero)
})