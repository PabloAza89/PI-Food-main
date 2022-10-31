const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const { Recipes , Diets , Recipes_Diets , Op } = require('../db.js'); // ADDED

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra 
// ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

/* router.get('/recipes', async (req, res) => {
    const { title } = req.query
    try {
      if (title) {
        const exactRecipes = await Recipes.findAll({
            attributes: ['title', 'summary', 'healthScore', 'instructions'],
            where: {
                title: title
            }
          }
        )
        if (exactRecipes[0] === undefined) {
            const allRecipes = await Recipes.findAll({
                attributes: ['title', 'summary', 'healthScore', 'instructions'],
              }
            )
            return res.status(200).send(allRecipes)

        }
        else return res.status(200).send(exactRecipes)
      }
      
    }
    catch (e) {
        res.status(400).send('No hay recetas disponibles...')      
    }
}); */

// EXACT MATCH
/* router.get('/recipes', async (req, res) => {
    const { title } = req.query
    try {
      if (title) {
        const exactRecipes = await Recipes.findAll({
            //attributes: ['title', 'summary', 'healthScore', 'instructions'],
            where: {
                title: title
            }
         }
        )
        return res.status(200).send(exactRecipes)
      
        }
    }
    catch (e) {
        res.status(400).send('No hay recetas disponibles...')      
    }
}); */

// PERFECT SEARCHER !
router.get('/recipes', async (req, res) => {
    const { title } = req.query;
    
    try {
        if (title) {
            const titleTLC = title.toLowerCase();
            const allAndExactDBRecipes = await Recipes.findAll({
                attributes: ['title', 'summary', 'healthScore', 'analyzedInstructions'],
                where: {
                    title: {
                      [Op.like]: `%${titleTLC}%`
                    }
                  }
                
             }
            )
            if (allAndExactDBRecipes[0] === undefined) return res.status(200).send('No hay recetas disponibles')
            return res.status(200).send(allAndExactDBRecipes)
          
            }
        
        const apiRawData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f02bdac78602401eb4a22dc35033d573&number=3&addRecipeInformation=true`);
        const allAPIRecipes = apiRawData.data.results.map(e => {
            return {
                title: e.title,
                summary: e.summary,
                healthScore: e.healthScore,
                analyzedInstructions:
                    e.analyzedInstructions[0] ? e.analyzedInstructions[0].steps.map(e=> e.step) : []
            }
            
        })
        //res.status(200).send(allAPIRecipes)
        

        const allDBRecipes = await Recipes.findAll({
            attributes: ['title', 'summary', 'healthScore', 'analyzedInstructions'],
                     
         }
         )

         res.status(200).send(allDBRecipes.concat(allAPIRecipes))

     
    }
    catch (e) {
        res.status(400).send('No hay recetas disponibles...')      
    }
});

// GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params
    //const id = "877371e9-5398-4da2-89f3-42e32ba6eb0b";
    try {
      if (true) {
        const recipes = await Recipes.findByPk(id)
        res.status(200).send(recipes)
      }
    }
    catch (e) {
        res.status(400).send('No hay recetas con ese id..')      
    }
});

// POST /recipes:
// Recibe los datos recolectados desde el formulario controlado de la ruta 
// de creación de recetas por body
// Crea una receta en la base de datos relacionada con sus tipos de dietas.

/* router.post('/recipes', async (req, res) => {
    
    const { title , summary , healthScore , instructions } = req.body;
    try {
        if ( title && summary && healthScore && instructions ) {
            const recipes = await Recipes.create(req.body);
            return res.status(200).json(recipes);
        }
    } catch (e) {
        return res.status(404).send("Falta enviar algun dato");
    }
}); */

router.post('/recipes', async (req, res) => {
    
    try {
        res.json(await Recipes.bulkCreate([
            {   title: "fake title 1",
                summary: "test summary",
                healthScore: 10,
                analyzedInstructions: 'these are the instructions'
            },
            {   title: "fake title 2",
                summary: "test summary",
                healthScore: 11,
                analyzedInstructions: 'these are the instructions'
            },
            {   title: "fake title 3",
                summary: "test summary",
                healthScore: 12,
                analyzedInstructions: 'these are the instructions'
            }

          ]).then(() => console.log("se cargo la fake recipe")));
        
    }
    catch(e) {
        res.status(400).send("hubo un error en la precarga de datos")
    }
});

// GET /diets:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, 
// deberán precargar la base de datos con los tipos de datos 
// indicados por spoonacular acá

// ONLY FOR FIRST MANUAL POST
router.post('/diets', async (req, res) => {
    try {
        res.json(await Diets.bulkCreate([
            { title: "Gluten Free", },
            { title: "Ketogenic" },
            { title: "Vegetarian" },
            { title: "Lacto-Vegetarian" },
            { title: "Ovo-Vegetarian" },
            { title: "Vegan" },
            { title: "Pescetarian" },
            { title: "Paleo" },
            { title: "Primal" },
            { title: "Low FODMAP" },
            { title: "Whole30" }
            /* { title: ["Gluten Free", "Ketogenic", "Vegetarian" , "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]} */
          ]))//.then(() => console.log("Users data have been saved")));
    }
    catch(e) {
        res.status(400).send('Las dietas ya estan precargadas')
    }
    
      
  });

router.get('/diets', async (req, res) => {
    try {
        const diets = await Diets.findAll()
        res.status(200).send(diets)
    }
    catch (e) {
        res.status(400).send('No hay dietas disponibles...')      
    }
});



module.exports = router;
