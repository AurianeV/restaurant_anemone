// routes/notion.js
const express = require('express');
const { Client } = require('@notionhq/client');

const router = express.Router();

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

router.get('/', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const results = response.results.map((page) => {
      const props = page.properties;
      return {
        titre: Array.isArray(props.titre?.title) && props.titre.title.length > 0 ? props.titre.title[0].plain_text : '',
        texte: Array.isArray(props.texte?.rich_text) && props.texte.rich_text.length > 0 ? props.texte.rich_text[0].plain_text : '',
        image: Array.isArray(props.image?.files) && props.image.files.length > 0 ? props.image.files[0].file.url : '',

      };
    });

    res.json(results);
  } catch (error) {
    console.error('Erreur Notion:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération depuis Notion' });
  }
});

module.exports = router;
