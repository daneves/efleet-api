import express from 'express';
import cors from 'cors';
import leadRouter from './leadRouter'; // ou o caminho correto

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: '*', // ou 'https://efleetcash-portal.onrender.com'
}));

app.use(express.json());

app.use('/lead', leadRouter); // <-- ESSA LINHA É ESSENCIAL!

app.get('/', (_, res) => {
  res.send('API eFleet está rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
