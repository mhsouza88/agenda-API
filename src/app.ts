import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Agendamento de Consultas Veterinárias.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});

export default app;
