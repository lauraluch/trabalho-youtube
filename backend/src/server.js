const express = require('express');
const YouTube = require('youtube-node');

const app = express();
const youtube = new YouTube();

youtube.setKey('AIzaSyD_5etwHij1lDq7TrJXhTVOhQEdfV_KaV0');

app.get('/playlist/:id', (req, res) => {
  const playlistId = req.params.id;

  youtube.getPlayListsItemsById(playlistId, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao obter informações da playlist.');
    } else {
      res.json(result);
    }
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
