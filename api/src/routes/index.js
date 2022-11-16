// SUMMARIZED WITH OWN JSON
const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { API_KEY1 , API_KEY2 , API_KEY3 , API_KEY4 , API_KEY5 } = process.env;
const API_KEY = API_KEY5;
const NUMBER = 1;
const { Recipes , Diets , Op } = require('../db.js');
let toAvoidKey = require('../../../toAvoidKey');

const router = Router();



router.get('/recipes(|/:id)', async (req, res) => {
    try {
        let foundInDB  = await Recipes.findAll({
            where: req.query.title? { title: {[Op.like]: `%${req.query.title.toLowerCase()}%`}} : req.params.id ? { id: req.params.id } : {},
            include: [{
                model: Diets,
                attributes: ['title'],
                through: { attributes: [] }
            }]  
        }).catch(function(e){ console.log('NOT FOUND IN DB.. SCRIPT CONTINUED THANKS TO "foundInDB != null" ;)') }); 

        let allApiResultsHelper = toAvoidKey
            
        if (foundInDB != null) {
            let dietsArray = foundInDB.map(e => e.Diets).map(e => e.map(e => e.title));
            let arrayDB = []

            dietsArray.map(e => {
                arrayDB.push({
                    id: foundInDB[dietsArray.indexOf(e)].id,
                    title: foundInDB[dietsArray.indexOf(e)].title,
                    summary: foundInDB[dietsArray.indexOf(e)].summary,
                    healthScore: foundInDB[dietsArray.indexOf(e)].healthScore,
                    analyzedInstructions: foundInDB[dietsArray.indexOf(e)].analyzedInstructions,
                    database: foundInDB[dietsArray.indexOf(e)].database,
                    diets: e
                })
            })
                    
            const apiFilteredResult = req.query.title?allApiResultsHelper.filter(e => e.title.toLowerCase().includes(req.query.title.toLowerCase())): req.params.id ? allApiResultsHelper.filter(e => e.id === parseInt(req.params.id)) : allApiResultsHelper;
            if (apiFilteredResult[0] === undefined && arrayDB[0] === undefined) return res.status(400).send('THERE ARE NOT RECIPES BY THAT NAME.. :(')
            return res.status(200).send(arrayDB.concat(apiFilteredResult))
        } else {
            if (parseInt(req.params.id).toString() === req.params.id.toString()) {
                if (allApiResultsHelper.filter(e => e.id === parseInt(req.params.id))[0] === undefined) return res.status(400).send('THERE ARE NOT RECIPES BY THAT ID.. :(')
                else return res.status(200).send(allApiResultsHelper.filter(e => e.id === parseInt(req.params.id))) 
                
            } else return res.status(400).send('THERE ARE NOT RECIPES BY THAT ID.. :(')
        } 
    } catch(e) {
        if (e.code === 'ERR_BAD_REQUEST') res.status(402).send('ERROR DE API_KEY.. POR FAVOR ACTUALIZA LA API KEY !')
        else res.status(400).send('THERE ARE NOT RECIPES BY THAT TITLE OR ID..')
    }
});

router.post('/recipes', async (req, res) => {
    const { diets , title , summary , healthScore , analyzedInstructions } = req.body;    
    
    //let diets = ['whole 30', 'pescatarian']
    //let diets = ['whole 30', 'vegan']
    //let diets = ['pescatarian', 'vegan']

    //let diets = ['pescatarian', 'vegan']
    //console.log("TEST ROUTES", req.body)
    //console.log("TEST ROUTES", diets)

    try {
        const createRecipe = await Recipes.create({
            title: title,
            summary: summary,
            healthScore: parseInt(healthScore),
            analyzedInstructions: analyzedInstructions

            //  title: "fake title 1",
            // summary: "test summary 1",
            // healthScore: 3,
            // analyzedInstructions: 'these are the instructions'

            // title: "fake title 2",
            // summary: "test summary 2",
            // healthScore: 80,
            // analyzedInstructions: 'these are the instructions'

            // title: "fake rice 3",
            // summary: "test summary 3",
            // healthScore: 70,
            // analyzedInstructions: 'these are the instructions'

          });
        const relatedDiets = await Diets.findAll({           
            where: { [Op.or]: [ { title: diets } ] }
        })
        createRecipe.addDiets(relatedDiets)
        res.status(200).send(createRecipe)
    } catch(e) {
        res.status(400).send("THERE WAS AND ERROR WHILE CHARGING DATA..")
    }
});

router.post('/diets', async (req, res) => {
    try {
        res.json(await Diets.bulkCreate([
           /*  { title: "Gluten Free", },
            { title: "Ketogenic" },
            { title: "Vegetarian" },
            { title: "Lacto-Vegetarian" },
            { title: "Vegan" },
            { title: "Pescetarian" },
            { title: "Paleo" },
            { title: "Primal" },
            { title: "Low FODMAP" },
            { title: "Whole30" } */

            // { title: "all", },
            // { title: "gluten free", },
            // { title: "ketogenic" },
            // { title: "vegan" },
            // { title: "lacto ovo vegetarian" },
            // { title: "pescatarian" },
            // { title: "paleolithic" },
            // { title: "primal" },
            // { title: "fodmap friendly" },
            // { title: "whole 30" },
            // { title: "dairy free" }

            { title: "All Diets", },
            { title: "Gluten Free", },
            { title: "Ketogenic" },
            { title: "Vegan" },
            { title: "Lacto Ovo Vegetarian" },
            { title: "Pescatarian" },
            { title: "Paleolithic" },
            { title: "Primal" },
            { title: "Fodmap Friendly" },
            { title: "Whole 30" },
            { title: "Dairy Free" }
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
    } catch(e) {
        res.status(400).send('THERE ARE NOT AVAILABLE DIETS.. :(')      
    }
});

module.exports = router;