const express = require('express');
const router = express.Router();
const { homePage, exploreCategories, submitRecipe,
    searchRecipe, exploreRecipes, submitRecipeOnPost, searchCategory, showRandom, exploreLatest, updateRecipe, updateRecipeOnPost } = require('../controllers/recipeController');


router.get('/', homePage);
router.get('/categories', exploreCategories);
router.get('/recipe/:id', exploreRecipes);
router.get('/categories/:id', searchCategory);
router.get('/explore-random', showRandom);
router.get('/explore-latest', exploreLatest);
router.post('/search', searchRecipe);
router.get('/submit-recipe', submitRecipe);
router.get('/recipe/update/:id', updateRecipe);
router.post('/submit-recipe', submitRecipeOnPost);
router.post('/recipe/update/:id', updateRecipeOnPost);







module.exports = router
