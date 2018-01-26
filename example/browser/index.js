// polyfill fetch
require("whatwg-fetch")
const { createHaberdasherClient } = require("./service_pb_twirp.js")
const useJSON = /json/.test(window.location.search);
const client = createHaberdasherClient("http://localhost:8080", useJSON);

const hatbox = document.getElementById("hatbox");

function randomSize() {
    return Math.floor(Math.random() * 10) // could be zero
}

function getHat(inches) {
    client.makeHat({ inches }).then(hat => {
        hatbox.innerHTML += "<pre>" + JSON.stringify(hat, null, 2) + "</pre>";
    }, err => {
        hatbox.innerHTML += "<pre class=error>" + JSON.stringify({ code: err.code, msg: err.message, meta: err.meta }, null, 2) + "</pre>";
    }).then(() => {
        setTimeout(() => getHat(randomSize()), 3000);
    });
}

getHat(1);
