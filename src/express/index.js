const express = require('express');
const port = process.env.PORT || 5000;
const animales = ['perro','gato','ballena','paloma','loro','serpiente','conejo','bufalo','rata','chancho','tigre','dragon'];
const paises = []

var app = express();
var rutasPaises = express.Router();
var rutasVegetales = express.Router();

//-------------MIDDLEWARES--------------
app.use((req,res,next)=>{
    console.log('SOY UNa MERCANCÍA DEL MEDIO -> req:'+JSON.stringify(req.body));
    next()
})

//------------RUTAS COMUNES-------------
app.get( '/', (req,res,next)=>{ res.send('Hola mundo') } );
app.get( '/animales/:id', (req,res,next)=>{ res.send(animales[req.params.id]) } );
app.get( '/animales/:id/:carac', (req,res,next)=>{ res.send(animales[req.params.id]+' '+req.params.carac) } );
app.get( '/status', (req,res,next)=>{ res.status(200).send('Hola mundo con status-code') } );
// app.post()
// app.put()
// app.delete()
//Queries-> https://www.sitio.com/consulta?nombre=jose&edad=32&sexo=m :
app.get( '/consulta',(req,res,next)=>{ res.status(200).send('consultando a->'+req.query.nombre+' '+req.query.edad) })

//-----------USO DE Router()------------
app.use( '/paises',rutasPaises);
rutasPaises.get('/capitales', (req,res,next)=>{ res.status(200).send('Ruta:/paises -> sub-ruta:/capitales')});
rutasPaises.get('/provincias', (req,res,next)=>{ res.status(200).send('Ruta:/paises -> sub-ruta:/provincias')});

app.listen(port,()=>{console.log(`Servidor corriendo en el puerto ${port}`)})