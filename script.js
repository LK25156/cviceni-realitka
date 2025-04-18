/*Nejde mi to spustit
document.title = 'Objekty v JavaScriptu | Můj blogísek';
const siteWidth = window.innerWidth;
document.body.innerHTML += siteWidth;
const language = window.navigator.language;
document.innerHTML += language;
document.body.innerHTML = `Šířka stránky: ${window.innerWidth} px`;
window.onload = function () {
  document.body.innerHTML = `Šířka stránky: ${window.innerWidth} px`;
};*/

//JS1/2 Úkol 1 realitka

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

document.body.innerHTML += "<p>Dispozice: "+ apartment.disposition +"</p>"
document.body.innerHTML += "<p>Najem bez poplatku: "+ apartment.price.rent +"</p>"
document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units+"</p>"

const city = apartment.city;
const district = apartment.district;

document.body.innerHTML += "<p>Mesto: "+ city +"</p>"
document.body.innerHTML += "<p>Mestska cast: "+ district +"</p>"

apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"
