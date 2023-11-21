const express = require('express');
const YouTube = require('youtube-node');
const cors = require('cors');


const app = express();
const youtube = new YouTube();

app.use(cors());
app.use(cors({
  origin: ['http://localhost:3000']
}));

youtube.setKey('AIzaSyD_5etwHij1lDq7TrJXhTVOhQEdfV_KaV0');

app.get('/playlist/:id', (req, res) => {
  const playlistId = req.params.id;

  const maxResults = 100;

  youtube.addParam('maxResults', maxResults);

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
