"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadRouter = void 0;
const express_1 = require("express");
const rezultz_lead_1 = require("./rezultz-lead");
exports.leadRouter = (0, express_1.Router)();
exports.leadRouter.post('/lead', async (req, res) => {
    try {
        const response = await (0, rezultz_lead_1.createLead)(req.body);
        res.status(200).json({ success: true, response });
    }
    catch (error) {
        console.error('Erro ao criar lead:', error);
        res.status(500).json({ error: 'Erro ao criar lead' });
    }
});
