"use strict";

document.addEventListener("DOMContentLoaded", fetchData());

async function fetchData() {
    try {
    const response = await fetch(
        "https://webbutveckling.miun.se/files/ramschema.json"
    );
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error(`Felmeddelande ${error}`);
    }
}