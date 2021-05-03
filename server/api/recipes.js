const router = require('express').Router();
const { Recipes } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipes.findAll();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, nexy) => {
  try {
    const singleRecipe = await Recipes.findByPk(req.params.id);
    if (!singleRecipe) {
      const err = Error('Recipe not found');
      err.status = 400;
      throw err;
    }
    res.json(singleRecipe);
  } catch (error) {
    next(error);
  }
});
