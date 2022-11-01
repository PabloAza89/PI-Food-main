const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY1 , API_KEY2 , API_KEY3 , API_KEY4 } = process.env;

const { Recipes , Diets , Recipes_Diets , Op } = require('../db.js'); // ADDED

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra 
// ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado


// PERFECT SEARCHER !
router.get('/recipes', async (req, res) => {
    const { title } = req.query;
    
    try {
        if (title) {
            const titleTLC = title.toLowerCase();
            const searchDBRecipes = await Recipes.findAll({
                //attributes: [ 'id' , 'title', 'summary', 'healthScore', 'analyzedInstructions' ],
                where: {
                    title: {
                      [Op.like]: `%${titleTLC}%`
                    }
                }
            })

            const apiRawData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&number=3&addRecipeInformation=true`);
            const searchAPIRecipes = apiRawData.data.results.map(e => {
                return {
                    id: e.id,
                    title: e.title,
                    summary: e.summary,
                    healthScore: e.healthScore,
                    analyzedInstructions:
                        e.analyzedInstructions[0] ? e.analyzedInstructions[0].steps.map(e=> e.step) : [],
                    image: e.image,
                    diets: e.diets,
                    dishTypes: e.dishTypes
                }
            })
            const apiFilteredResult = searchAPIRecipes.filter(e => e.title.toLowerCase().includes(title.toLowerCase()));
            if (searchDBRecipes[0] === undefined && apiFilteredResult[0] === undefined) return res.status(200).send('No hay recetas disponibles')
            return res.status(200).send(searchDBRecipes.concat(apiFilteredResult))
        }
        
        const apiRawData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&number=3&addRecipeInformation=true`);
        const allAPIRecipes = apiRawData.data.results.map(e => {
            return {
                id: e.id,
                title: e.title,
                summary: e.summary,
                healthScore: e.healthScore,
                analyzedInstructions:
                    e.analyzedInstructions[0] ? e.analyzedInstructions[0].steps.map(e=> e.step) : [],
                image: e.image,
                diets: e.diets,
                dishTypes: e.dishTypes
            }
        })

        const allDBRecipes = await Recipes.findAll({
            attributes: ['id' , 'title', 'summary', 'healthScore', 'analyzedInstructions']
        })
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
    const { id } = req.params;
    let findByIDinDB;
    try {
        if (true) {
            const apiRawData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY1}&number=3&addRecipeInformation=true`);
                const allAPIRecipes = apiRawData.data.results.map(e => {
                    return {
                        id: e.id,
                        title: e.title,
                        summary: e.summary,
                        healthScore: e.healthScore,
                        analyzedInstructions:
                            e.analyzedInstructions[0] ? e.analyzedInstructions[0].steps.map(e=> e.step) : [],
                        image: e.image,
                        diets: e.diets,
                        dishTypes: e.dishTypes
                    }
                })
            
            const apiFilteredResult = allAPIRecipes.filter(e => e.id === parseInt(id));

            if (apiFilteredResult[0] === undefined) {
                findByIDinDB = await Recipes.findByPk(id)
            }

            res.status(200).send(apiFilteredResult.concat(findByIDinDB))

        }
    }
    catch (e) {
        res.status(400).send('No hay recetas con ese id')      
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
    let title = ['Vegan', 'Primal']
    // WORKING
    try {
        const createRecipe = await Recipes.create({
            title: "fake title 0",
            summary: "test summary",
            healthScore: 10,
            analyzedInstructions: 'these are the instructions'
          });
        const relatedDiets = await Diets.findAll({           
            where: {
                [Op.or]: [
                    { title: title }
                   
                  ]
            }

        })
        createRecipe.addDiets(relatedDiets)
        res.status(200).send(createRecipe)

    }

   
  /*     
      const result = await User.findOne({
        where: { username: 'p4dm3' },
        include: Profile
      }); */

    /*// WORKING
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

          ]))//.then(() => console.log("se cargo la fake recipe")));
        
    } */
    
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
