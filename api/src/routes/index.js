const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Recipes , Diets , Recipes_Diets } = require('../db.js'); // ADDED

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra 
// ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

router.get('/recipes', async (req, res) => {
    const { title } = req.query
    try {
      if (title) {
        const recipes = await Character.findAll({
            attributes: ['title']
          }
        )
        res.status(200).send(character)
      }
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
    try {
      if (title) {
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

router.post('/recipes', async (req, res) => {
    
    const { title , summary , healthScore , instructions } = req.body;
    try {
        if ( title && summary && healthScore && instructions ) {
            const recipes = await Recipes.create(req.body);
            return res.status(200).json(recipes);
        }
    } catch (e) {
        return res.status(404).send("Falta enviar algun dato");
    }
});

// GET /diets:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, 
// deberán precargar la base de datos con los tipos de datos 
// indicados por spoonacular acá

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
