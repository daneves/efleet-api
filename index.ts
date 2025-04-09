import express from 'express';
import { leadRouter } from './leadRouter';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rota da API no backend
app.use('/api', leadRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
