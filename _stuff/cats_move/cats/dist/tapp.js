var cat = document.querySelector('.cat');
window.onload = function () {
    getCat();
};
cat.onclick = getCat;
function getCat() {
    cat.innerText = bigCats[Math.floor(Math.random() * bigCats.length)]; // + i
}
var bigCats = [
    "Tiger",
    "Lion",
    "Leopard",
    "Jaguar",
    "Snow leopard",
    "Cheetah",
    "Cougar",
    "Eurasian lynx",
    "Iberian lynx",
    "Sunda clouded leopard",
    "African leopard",
    "Asiatic lion",
    "South China tiger",
    "Indochinese tiger",
    "Malayan tiger",
    "Sumatran tiger",
    "Amur tiger",
    "Caracal",
    "Serval",
    "Fishing cat",
    "Bornean bay cat",
    "Andean mountain cat",
    "African golden cat",
    "Margay",
    "Ocelot",
    "Pampas cat",
    "Geoffroy's cat",
    "Jaguarundi"
];
