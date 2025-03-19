const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');  

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.post('/entrevista', async (req, res) => {
  const { nome, email, telefone, first_video, second_video, third_video, fourth_video, fifth_video } = req.body;

  try {
    const novoRegistro = await prisma.entrevista_videos.create({
      data: {
        aluno_nome: nome,
        aluno_email: email,
        aluno_telefone: telefone,
        first_video,
        second_video,
        third_video,
        fourth_video,
        fifth_video,
      },
    });

    res.status(201).json(novoRegistro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o registro.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
