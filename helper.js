const { identity } = require("lodash")
const { setPriority } = require("os")
const { delimiter } = require("path")
const { resourceLimits } = require("worker_threads")

agregando ?apiKey={YOUR_API_KEY} al final de cada endpoint.

 https://api.spoonacular.com/recipes/complexSearch

 https://api.spoonacular.com/recipes/complexSearch?apiKey=f02bdac78602401eb4a22dc35033d573&number=30

 add &addRecipeInformation=true

?apiKey={YOUR_API_KEY}
f02bdac78602401eb4a22dc35033d573
?apiKey=f02bdac78602401eb4a22dc35033d573

https://spoonacular.com/food-api/docs#Authentication
https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2

  https://api.spoonacular.com/recipes/{id}/information

  5224 total


recipe:
id (auto)
title
summary
healthScore
instructions

diets:
id( auto)
title



