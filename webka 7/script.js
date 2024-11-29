const heroes = [
    {
        name: "Homelander",
        image: "D:\Khama's files\webka 7\webka 7 images\Homelander.jpg",
        info: "Height: 182 cm, Gender: Male, Race: White",
        stats: { intelligence: 85, strength: 100, speed: 85, durability: 100, power: 100, combat: 75 },
    },
    {
        name: "Soldier Boy",
        image: "D:\Khama's files\webka 7\webka 7 images\Soldier-Boy.jpg",
        info: "Height: 185 cm, Gender: Male, Race: White",
        stats: { intelligence: 75, strength: 95, speed: 60, durability: 90, power: 90, combat: 85 },
    },
    {
        name: "Black Noir",
        image: "D:\Khama's files\webka 7\webka 7 images\Black-Noir.jpg",
        info: "Height: 180 cm, Gender: Male, Race: Black",
        stats: { intelligence: 70, strength: 85, speed: 80, durability: 90, power: 20, combat: 95 },
    },
    {
        name: "Starlight",
        image: "D:\Khama's files\webka 7\webka 7 images\Startlight.jpg",
        info: "Height: 167 cm, Gender: Female, Race: White",
        stats: { intelligence: 80, strength: 60, speed: 50, durability: 60, power: 85, combat: 60 },
    },
    {
        name: "Stormfront",
        image: "D:\Khama's files\webka 7\webka 7 images\Stormfront.jpg",
        info: "Height: 170 cm, Gender: Female, Race: White",
        stats: { intelligence: 75, strength: 90, speed: 70, durability: 80, power: 95, combat: 80 },
    },
    {
        name: "A-Train",
        image: "D:\Khama's files\webka 7\webka 7 images\A-Train.jpg",
        info: "Height: 175 cm, Gender: Male, Race: Black",
        stats: { intelligence: 55, strength: 60, speed: 100, durability: 70, power: 65, combat: 60 },
    },
    {
        name: "Blindspot",
        image: "D:\Khama's files\webka 7\webka 7 images\Blindspot.jpg",
        info: "Height: 172 cm, Gender: Male, Race: White",
        stats: { intelligence: 65, strength: 50, speed: 70, durability: 30, power: 40, combat: 50 },
    },
    {
        name: "Kimiko Miyashiro",
        image: "D:\Khama's files\webka 7\webka 7 images\Kimiko.jpg",
        info: "Height: 160 cm, Gender: Female, Race: Asian",
        stats: { intelligence: 65, strength: 90, speed: 75, durability: 80, power: 70, combat: 95 },
    },
    {
        name: "Tek Knight",
        image: "D:\Khama's files\webka 7\webka 7 images\Tek_Knight.jpg",
        info: "Height: 178 cm, Gender: Male, Race: White",
        stats: { intelligence: 85, strength: 65, speed: 60, durability: 70, power: 55, combat: 80 },
    },
    {
        name: "The Deep",
        image: "D:\Khama's files\webka 7\webka 7 images\Deep.jpg",
        info: "Height: 185 cm, Gender: Male, Race: White",
        stats: { intelligence: 55, strength: 60, speed: 55, durability: 60, power: 50, combat: 50 },
    }
];

function getRandomHero() {
    const hero = heroes[Math.floor(Math.random() * heroes.length)];

    document.getElementById("hero-avatar").src = hero.image;
    document.getElementById("hero-name").innerText = hero.name;
    document.getElementById("hero-info").innerText = hero.info;
    document.getElementById("intelligence-value").innerText = hero.stats.intelligence;
    document.getElementById("strength-value").innerText = hero.stats.strength;
    document.getElementById("speed-value").innerText = hero.stats.speed;
    document.getElementById("durability-value").innerText = hero.stats.durability;
    document.getElementById("power-value").innerText = hero.stats.power;
    document.getElementById("combat-value").innerText = hero.stats.combat;
}

// Preload the first hero when the page loads
document.addEventListener("DOMContentLoaded", getRandomHero);
