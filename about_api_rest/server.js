import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na prota ${port}`);
  console.log(`CTRL + CLIQUE em http://localhost:${port}`);
});
