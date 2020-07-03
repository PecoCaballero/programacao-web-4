const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

app.listen(port);
console.log('API funcionando!')

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123mudar',
        database: 'testenode'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log("Query SQL executada");
    });
    
}

router.get('/clientes', (req, res) => {
    execSQLQuery('SELECT * FROM Clientes', res);
})

router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

router.delete('/clientes/:id', (req, res) =>{
    execSQLQuery('DELETE FROM testenode.clientes WHERE ID=' + parseInt(req.params.id), res);
})

router.post('/clientes', (req, res) =>{
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`INSERT INTO testenode.clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});