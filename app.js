import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database.js';
import Data from './data.model.js';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());

// Create a new post
app.post('/', async (req, res) => {
  try {
    const { umidade, temperatura } = req.body;
    const newData = await Data.create({ umidade, temperatura });
    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the data.' });
  }
});

app.get('/', async (req, res) => {
    try {
      const { umidade, temperatura } = req.query;
      const newData = await Data.create({ umidade, temperatura });
      res.json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the data.' });
    }
  });

// Start the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
