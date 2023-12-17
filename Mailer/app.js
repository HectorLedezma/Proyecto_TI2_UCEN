const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Importa el módulo body-parser

const app = express();

// Usa body-parser para parsear el cuerpo de la solicitud
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const config = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'qrcleta.ucentral@gmail.com',
            pass: 'hnga jbij wnpd haih'
        }
    };

    let trasp = nodemailer.createTransport(config);

    const mensaje = {
        from: 'qrcleta.ucentral@gmail.com',
        to: req.body.mail, // Accede al valor desde el cuerpo de la solicitud (req.body)
        subject: 'Recuperación de contraseña',
        text: 'Nueva contraseña: ' + req.body.newpass // Accede al valor desde el cuerpo de la solicitud (req.body)
    };
    console.log('Body');
    console.log(req.body);
    trasp.sendMail(mensaje, (err, inf) => {
        
        if (err) {
            res.status(500).send(err.message);
            console.log(err)
        } else {
            res.status(200).send('Correo enviado correctamente');
            console.log('Enviado');
        }
    });
});

const port = 3001;
app.listen(port, () => {
    console.log(`Servidor Node.js en http://localhost:${port}`);
});
