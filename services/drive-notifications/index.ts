import express from 'express';

const PORT = process.env.PORT ?? 3000;
const app = express();

app
  .use(express.json())
  .listen(PORT, () => {
    console.log('Server listening...');
  });

app.get('/', (req, res) => {
  res.send({
    "status": "OK"
  })
})

app.post('/notifications', (req, resp) => {
  resp.send(req.body);
});

export default app;
