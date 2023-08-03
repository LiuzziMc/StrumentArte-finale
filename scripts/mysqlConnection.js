const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3100;

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/', (req, res) => {
  res.send('Hello World!');
});

const getDB = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "barto",
    database: "ecommerce"
  });
}

app.get('/api/utenti', (req, res) => {
  const con = getDB();
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "SELECT * FROM utente";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result, null, 4));
      res.json(result);
    });
    con.end();
  });

});

// esempio di gestione della singola richiesta
app.post('/bi/login', (req, res) => {
  console.log("RICEVO LA RICHIESTA", req.body);
  var email = req.body.email;
  var password = req.body.password;
  // query per selezionare un utente con lo stesso nome
  const sql = "SELECT * FROM utente WHERE EMAIL = '" + email + "'";
  const con = getDB();
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result, null, 4));
    // verifica risultati e della password
    if (result && result.length > 0) {
      if (result[0].PASSWORD_UTENTE == password) {
        res.json(result[0]);
      }
    } else {
      res.json({ errore: "LOGIN FALLITA" });

    }
    // IMPORTANTE: chiudere la connessione
    con.end();
  });
});

app.post('/bi/register', (req, res) => {
  console.log("RICEVO LA RICHIESTA DI REGISTRAZIONE", req.body);
  var nome = req.body.nome;
  var cognome = req.body.cognome;
  var email = req.body.email;
  var password = req.body.password;
  var numero_tel = req.body.numero_tel;
  var data_nascita = req.body.data_nascita;

  // Query per inserire un nuovo utente nel database utilizzando il prepared statement
  const sql = `INSERT INTO utente (NOME, COGNOME, EMAIL, PASSWORD_UTENTE, NUMERO_TELEFONO, DATA_NASCITA) 
               VALUES (?, ?, ?, ?, ?, ?)`;

  const con = getDB();
  con.query(sql, [nome, cognome, email, password, numero_tel, data_nascita], function (err, result) {
    if (err) {
      console.error("Errore durante la registrazione:", err);
      res.json({ errore: "REGISTRAZIONE FALLITA" });
    } else {
      console.log("Registrazione avvenuta con successo:", result);
      res.json({ successo: "REGISTRAZIONE AVVENUTA CON SUCCESSO" });
    }
    // IMPORTANTE: chiudere la connessione
    con.end();
  });
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));



//Volevo cercare di implementare il recupero password con mySQl
// Aggiungi questa funzione sopra le tue route esistenti
function generateResetToken(email) {
  const token = crypto.randomBytes(20).toString('hex');
  const expiration = Date.now() + 3600000; // Token valido per 1 ora (3600000 millisecondi)

  const sql = "UPDATE utente SET resetToken = ?, resetTokenExpiration = ? WHERE EMAIL = ?";
  const con = getDB();
  con.query(sql, [token, expiration, email], function (err, result) {
    if (err) {
      console.error("Errore durante la generazione del token:", err);
    }
    con.end();
  });

  return token;
}

app.post('/bi/forgot-password', (req, res) => {
  console.log("RICEVO LA RICHIESTA DI RECUPERO PASSWORD", req.body);
  var email = req.body.email;

  const resetToken = generateResetToken(email);

  // Invia l'email con il link di reset
  const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
      user: 'your-email',
      pass: 'your-email-password'
    }
  });

  const resetLink = `http://your-frontend-url/reset-password/${resetToken}`;

  const mailOptions = {
    from: 'your-email',
    to: email,
    subject: 'Password Reset',
    text: `Hai richiesto il reset della password. Fai clic sul seguente link per reimpostare la tua password: ${resetLink}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.json({ success: "Email di recupero password inviata con successo" });
});


