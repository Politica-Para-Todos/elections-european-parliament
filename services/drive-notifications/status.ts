import app from '.';

// Not working yet
// maybe route ?
app.get('/status', (req, res) => {
  res.status(200).json({
    databaseConnection: 'Healty'
  });
});
