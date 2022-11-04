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