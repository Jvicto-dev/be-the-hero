const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

// ========= Rota de Login ========= // 
routes.post('/session', SessionController.create);



//* ========= Rotas Ongs ========= *//
 // Listar
routes.get('/ongs', OngController.index);
 // Criar
routes.post('/ongs', OngController.create);


//* ========= Rotas Profile ========= *//
routes.get('/profile', ProfileController.index);


//* ========= Rotas Casos ========= *//
 // Listar
routes.get('/incidents', IncidentController.index);
 // Criar
routes.post('/incidents', IncidentController.create);
 // DEeletar
routes.delete('/incidents/:id', IncidentController.delete);





module.exports = routes; 