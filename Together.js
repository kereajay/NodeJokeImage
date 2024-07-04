const express = require("express");
const jokes = require("./data.js");
const Imagejokerouter = express.Router();

async function getdata() {
  try {
    let res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=", {
      method: "GET",
      headers: { "X-Api-Key": "W6JUsiZ+oO92iv6NMDplgg==J4DLSl4RBvlZnGvv" },
      contentType: "application/json",
    });
    let data = await res.json();
    // console.log(data[0].joke);
    // joke=data[0].joke
    return data[0].joke;
  } catch (error) {
    console.log(error);
  }
}

const URL = "https://picsum.photos/200/300";
const randomimageapi = async () => {
  const res = await fetch(URL);
  // const data=await res.json()
  // console.log(res.url)
  return res.url;
  // console.log(data)
};

Imagejokerouter.get("/JokeImage", (req, res) => {
  getdata().then((joke) => {
    randomimageapi().then((url) => {
      const randomjokeindex = Math.floor(Math.random() * jokes.length);
      res.status(200).json({ joke: joke, imageurl: url });
    });
  });
});

module.exports = Imagejokerouter;
