const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());

/**
 * Se por acaso seu app for hospedado, so informar a origem dele para usa-lo, simples assim * 
 */
// app.use(cors({
//     origin:'http://meuapp.com.br'
// }));

app.use(express.json()); //falando para o express que vc quer converter um JSON em javacsript
app.use(routes); // esse código tem q ser abaixo de app.use(express.json());
/** 
 * Rota / Recurso 
 */

/**
 * GET: Buscar/Listar informações do back-end
 * POST: Criar uma infromação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end  
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)  
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * const testeQuery = request.query;
 * const testeParams = request.params;
 * const testeBody = request.body;
 * 
 */


/**
 * SQL: Mysql, SQLite, PostGreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB...
 */


/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where();   
 */




app.listen(3333);