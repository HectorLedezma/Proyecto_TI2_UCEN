const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.post('/send-email/:mail/:newpass',(req,res)=>{
    const config = {
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'qrcleta.ucentral@gmail.com',
            pass:'hnga jbij wnpd haih'
        }
    }
    let trasp = nodemailer.createTransport(config)
    const mensaje = {
        from:'qrcleta.ucentral@gmail.com',
        to:req.params.mail,
        subject:'Recuperación de contraseña',
        text:'Nueva contraseña: '+req.params.newpass
    }
    trasp.sendMail(mensaje,(err,inf)=>{
        if(err){
            res.status(500).send(err.message);
        }else{
            console.log('Enviado');
            res.status(200).jsonp(req.body);
        }
    });
})

const port = 3001; // Puedes usar cualquier puerto que desees
app.listen(port, () => {
    console.log(`Servidor Node.js en http://localhost:${port}`);
  });
/*


app.get('/api/data', (req, res) => {
  // Lógica para manejar las solicitudes API
  res.json({ message: 'Datos desde el servidor Node.js' });
});


*/