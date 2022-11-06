// ONLY FOR FIRST MANUAL POST
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

            { title: "gluten free", },
            { title: "ketogenic" },
            { title: "vegan" },
            { title: "lacto ovo vegetarian" },
            { title: "pescatarian" },
            { title: "paleolithic" },
            { title: "primal" },
            { title: "fodmap friendly" },
            { title: "whole 30" },
            { title: "dairy free" }
          ]))//.then(() => console.log("Users data have been saved")));
    }
    catch(e) {
        res.status(400).send('Las dietas ya estan precargadas')
    } 
  });