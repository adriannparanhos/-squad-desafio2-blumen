import express from 'express';
import route from './src/routes/route';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
