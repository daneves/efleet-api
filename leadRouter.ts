import { Router, Request, Response } from 'express';
import { createLead } from './rezultz-lead';

export const leadRouter = Router();

leadRouter.post('/', async (req: Request, res: Response) => {
  console.log('🔥 Dados recebidos no body:', req.body); // <- AQUI

  try {
    const response = await createLead(req.body);
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Erro dentro do createLead:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Erro ao criar lead' });
  }
});

