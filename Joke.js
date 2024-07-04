const express = require("express");
const jokes = require("./data.js");
const jokerouter = express.Router();


async function getdata() {
    try{
   


    let res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=", {
        method: 'GET',
        headers: { 'X-Api-Key': 'W6JUsiZ+oO92iv6NMDplgg==J4DLSl4RBvlZnGvv' },
        contentType: 'application/json',
    });
    let data = await res.json();
    // console.log(data[0].joke);
    // joke=data[0].joke
    return data[0].joke

}
catch(error){
    console.log(error);

}
}


jokerouter.get("/joke", (req, res) => {
//   const randomjokeindex = Math.floor(Math.random() * jokes.length);
getdata().then((joke) => {
    
    res.status(200).json({ joke:joke });
})
});

module.exports = jokerouter;
