const express = require('express');

// import functions
const { getArticles, createArticle, updateArticle, deleteArticle, getArticleBySlug } = require('../controllers/articleController');

const router = express.Router();

router.route('/articles').get(getArticles).post(createArticle);

router.route('/articles/:id').put(updateArticle).delete(deleteArticle);

router.get('/articles/slug/:slug', getArticleBySlug);

module.exports = router;