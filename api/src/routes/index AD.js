// EDITANDO
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

/* function qq() {
    router.use('/recipes/:id', async (req, res) => {
        if (req.params.id) {
            return req.originalUrl
        }
    })
} */

router.get('/recipes(|/:id)', async (req, res) => {
    console.log("ID", req.params.id)  
    console.log("TITLE", req.query.title)
    //console.log("A VER ", req.originalUrl)  

    try {
        return res.status(200).send('aaa 2')
        
        if (req.params.id || req.query.title) {
            const searchDBRecipes = await Recipes.findAll({
                //attributes: [ 'id' , 'title', 'summary', 'healthScore', 'analyzedInstructions' ],
                where: 
                    req.params.id ? { id: req.params.id } : req.query.title ? { title: { [Op.like]: `%${ req.query.title.toLowerCase() }%` } } : {}
                    //req.query.title ? { title: { [Op.like]: `%${ req.query.title.toLowerCase() }%` } } : {}
                ,
                include: [{
                    model: Diets,
                    attributes: ['title'],
                    through: {
                        attributes: []
                    }
                }]
            })
    
            let dietsArray = req.query.title ? searchDBRecipes.map(e => e.Diets).map(e => e.map(e => e.title)) : searchDBRecipes.map(e => e.Diets).map(e => e.map(e => e.title))
            
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
    
            return res.status(200).send(arrayForDB)
            let allApiResultsHelper = await allApiResults()
            const apiFilteredResult = req.query.title ? allApiResultsHelper.filter(e => e.title.toLowerCase().includes(req.query.title.toLowerCase())) : allApiResultsHelper || req.params.id ? allApiResultsHelper.filter(e => e.id.includes(req.params.id)) : allApiResultsHelper
            return res.status(200).send(arrayForDB.concat(apiFilteredResult))

        }
        //else {
            return res.status(200).send('aaa')

        //}
        
        
    }
    catch(e) {
        res.status(400).send('GET/RECIPES No hay recetas disponibles...')      
    }
});

// router.get('/recipes/:id', async (req, res) => {
//     const { id } = req.params;
//     //console.log('AAA', req.params.id)
  
//     try {
//         let allApiResultsHelper = await allApiResults()
//         const apiFilteredResult = allApiResultsHelper.filter(e => e.id === parseInt(id));

//         if (apiFilteredResult[0] === undefined) {
//           /*   let findByIDinDB = await Recipes.findByPk(id, {
//                 include: [{
//                     model: Diets,
//                     attributes: ['title'],
//                     through: {
//                         attributes: []
//                     }
//                     }]
//             }) */

//             let findByIDinDB = await Recipes.findAll({
//                 where: 
//                  req.params.id ? { id: req.params.id } : {}
//                 ,
//                 include: [{
//                     model: Diets,
//                     attributes: ['title'],
//                     through: {
//                         attributes: []
//                     }
//                     }]
//             })

//             let dietsArray = findByIDinDB.Diets.map(e => e.title)
//             let modifiedDBObj = {
//                 id: findByIDinDB.id,
//                 title: findByIDinDB.title,
//                 summary: findByIDinDB.summary,
//                 healthScore: findByIDinDB.healthScore,
//                 analyzedInstructions: findByIDinDB.analyzedInstructions,
//                 database: findByIDinDB.database,
//                 diets: dietsArray
//             }
//             return res.status(200).send(modifiedDBObj)

//         }
//          else {
//             res.status(200).send(apiFilteredResult)
//         }
//     }
//     catch(e) {
//         res.status(400).send('No hay recetas con ese id')      
//     }
// });

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
    catch(e) {
        res.status(400).send('No hay dietas disponibles...')      
    }
});



module.exports = router;
