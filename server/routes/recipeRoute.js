const express = require('express');
const router = express.Router();
const { homePage, exploreCategories, searchRecipe, exploreRecipes, searchCategory, showRandom, exploreLatest } = require('../controllers/recipeController');


router.get('/', homePage);
router.get('/categories', exploreCategories);
router.get('/recipe/:id', exploreRecipes);
router.get('/categories/:id', searchCategory);
router.get('/explore-random', showRandom);
router.get('/explore-latest', exploreLatest);
router.post('/search', searchRecipe);







module.exports = router
