// CLASSIC
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY1 , API_KEY2 , API_KEY3 , API_KEY4 , API_KEY5 } = process.env;
const API_KEY = API_KEY1;
const NUMBER = 1;

const { Recipes , Diets , Recipes_Diets , Op } = require('../db.js'); // ADDED
//const { DatabaseError } = require('sequelize');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

let allApiResults = async () => {
    const apiRawData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${NUMBER}&addRecipeInformation=true`);
    return apiRawData.data.results.map(e => {
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
}

router.get('/recipes', async (req, res) => {
    const { title } = req.query;
    
    function ifTitleExists () {
        return req.query.title ? { title: {[Op.like]: `%${req.query.title.toLowerCase()}%`}} : {}        
    }

    try {
        const searchDBRecipes = await Recipes.findAll({
            //attributes: [ 'id' , 'title', 'summary', 'healthScore', 'analyzedInstructions' ],
            where: 
            ifTitleExists()
            ,
            include: [{
                model: Diets,
                attributes: ['title'],
                through: {
                    attributes: []
                }
            }]
        })

        let dietsArray = searchDBRecipes.map(e => e.Diets).map(e => e.map(e => e.title))
        
        let arrayForDB = []

        dietsArray.map(e => {
            arrayForDB.push({
                id: searchDBRecipes[dietsArray.indexOf(e)].id,
                title: searchDBRecipes[dietsArray.indexOf(e)].title,
                summary: searchDBRecipes[dietsArray.indexOf(e)].summary,
                healthScore: searchDBRecipes[dietsArray.indexOf(e)].healthScore,
                analyzedInstructions: searchDBRecipes[dietsArray.indexOf(e)].analyzedInstructions,
                database: searchDBRecipes[dietsArray.indexOf(e)].database,
                diets: e
            })
        })

        let allApiResultsHelper = await allApiResults()
        const apiFilteredResult = req.query.title?allApiResultsHelper.filter(e => e.title.toLowerCase().includes(req.query.title.toLowerCase())):allApiResultsHelper;
        return res.status(200).send(arrayForDB.concat(apiFilteredResult))
    }
    catch (e) {
        if (e.code === 'ERR_BAD_REQUEST') res.status(402).send('ERROR DE API_KEY.. POR FAVOR ACTUALIZA LA API KEY !')
        else res.send(e.code)
    }
});

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    var findByIDinDB;
 
    try {
        if (true) {
            let allApiResultsHelper = await allApiResults()
            const apiFilteredResult = allApiResultsHelper.filter(e => e.id === parseInt(id));
            console.log("AA", apiFilteredResult[0] === undefined)

            if (apiFilteredResult[0] === undefined) {
                findByIDinDB = await Recipes.findByPk(id, {
                    include: [{
                        model: Diets,
                        attributes: ['title'],
                        through: {
                          attributes: []
                        }
                      }]
                })
                let dietsArray = findByIDinDB.Diets.map(e => e.title)
                let modifiedDBObj = {
                    id: findByIDinDB.id,
                    title: findByIDinDB.title,
                    summary: findByIDinDB.summary,
                    healthScore: findByIDinDB.healthScore,
                    analyzedInstructions: findByIDinDB.analyzedInstructions,
                    database: findByIDinDB.database,
                    diets: dietsArray
                }
                return res.status(200).send(modifiedDBObj)

            } else {
                res.status(200).send(apiFilteredResult)
            }
        }
    }
    catch (e) {
        res.status(400).send('No hay recetas con ese id')      
    }
});

router.post('/recipes', async (req, res) => {
    let title = ['Whole30', 'Pescetarian']
    // WORKING
    try {
        const createRecipe = await Recipes.create({
            title: "fake rice",
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
    catch(e) {
        res.status(400).send("hubo un error en la precarga de datos")
    }
});

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
