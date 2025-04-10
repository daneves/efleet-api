import { Router, Request, Response } from 'express';
import { createLead } from './rezultz-lead';

export const leadRouter = Router();

leadRouter.post('/lead', async (req: Request, res: Response) => {
  try {
    const response = await createLead(req.body);
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    res.status(500).json({ error: 'Erro ao criar lead' });
  }
});
