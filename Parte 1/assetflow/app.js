const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa o pacote cors
const colaboradorRoute = require('./routes/colaboradorRoute');
const assetRoute = require('./routes/assetRoute');
const marcaRoutes = require('./routes/marcaRoute');
const avariaRoutes = require('./routes/avariaRoute');

const app = express();

// Defina o objeto config com as configurações necessárias
const config = {
    PORT: process.env.PORT || 3000,
    ENV: process.env.NODE_ENV || 'development',
    PROTOCOL: 'http',
    HOSTNAME: 'localhost'
};

console.log("#", config.PORT);

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:3000', // URL do seu frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.json());
app.use('/colaborador', colaboradorRoute);
app.use('/asset', assetRoute);
app.use('/marcas', marcaRoutes);
app.use('/avarias', avariaRoutes);

// Start server
const startup
