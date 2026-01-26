"use strict";

//ladda DOM
document.addEventListener("DOMContentLoaded", () => {
    fetchData("https://webbutveckling.miun.se/files/ramschema.json");
});

//hämta JSON-data
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Felmeddelande ${error}`);
    }
}