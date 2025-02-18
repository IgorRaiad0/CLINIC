import express from 'express';
import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Configuração do Handlebars com helper de data
const hbs = handlebars.create({
    helpers: {
        formatDate: (date) => new Date(date).toLocaleDateString('pt-BR')
    },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
import admRouter from "./routes/ADM.js";
app.use('/ADM', admRouter);



app.get('/', (req, res) => {
    res.redirect('/index');
});

app.listen(5000, () => console.log('Servidor rodando em http://localhost:5000/ADM/index'));