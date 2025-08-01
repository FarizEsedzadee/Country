const heroSection = document.querySelector('#hero-section');
const statsSection = document.querySelector('#stats-section')
const qParams = location.search;
const alpCode = new URLSearchParams(qParams).get('alpha3Code');

const country = data.find(item => item.alpha3Code == alpCode);


function printHero() {
    heroSection.innerHTML = `<div class="absolute top-10 left-10 text-4xl opacity-30 float">Sən</div>
        <div class="absolute top-20 right-20 text-3xl opacity-40 wiggle">Bilirsən?</div>
        <div class="absolute bottom-10 left-1/4 text-5xl opacity-25 float">Mən Kiməm</div>
        
        <div class="absolute inset-0">
            <img src="${country.flag}" alt="${country.name}" class="w-full h-full object-cover opacity-20">
        </div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <div class="mb-8">
                    <span class="text-9xl mb-4 block wiggle">${country.alpha3Code}</span>
                </div>
                <h1 class="text-7xl md:text-9xl font-bold mb-6 text-fun-700" style="font-family: 'Fredoka One';">${country.name}</h1>
                <p class="text-3xl text-fun-600 mb-8 font-semibold">🌉 ${country.subregion}</p>
                <div class="flex flex-wrap justify-center gap-4 text-lg">
                    <span class="bg-fun-200 text-fun-800 px-6 py-3 rounded-full font-bold hover:scale-105 transform transition-all">🏛️ Paytaxt: ${country.capital || "Yoxdur"}</span>
                    <span class="bg-fun-200 text-fun-800 px-6 py-3 rounded-full font-bold hover:scale-105 transform transition-all">👥 Populyasiya: ${country.population.toLocaleString('de', 'DE')}</span>
                    <span class="bg-fun-200 text-fun-800 px-6 py-3 rounded-full font-bold hover:scale-105 transform transition-all">💰 Valyuta: ${country.currencies?.[0]?.symbol || "N/A"}</span>
                </div>
            </div>
        </div>`;
}

function printStats() {
    statsSection.innerHTML = `<div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div class="stat-card rounded-3xl p-6 text-center hover:scale-105 transform transition-all">
                    <div class="text-4xl mb-3">📟</div>
                    <div class="text-3xl font-bold text-fun-700">${country.callingCodes}</div>
                    <div class="text-fun-600 font-medium">Calling Code</div>
                </div>
                <div class="stat-card rounded-3xl p-6 text-center hover:scale-105 transform transition-all">
                    <div class="text-4xl mb-3">🗺️</div>
                    <div class="text-3xl font-bold text-fun-700">${country.region}</div>
                    <div class="text-fun-600 font-medium">Region</div>
                </div>
                <div class="stat-card rounded-3xl p-6 text-center hover:scale-105 transform transition-all">
                    <div class="text-4xl mb-3">🏙️</div>
                    <div class="text-3xl font-bold text-fun-700">${country.demonym}</div>
                    <div class="text-fun-600 font-medium">Demonym</div>
                </div>
                <div class="stat-card rounded-3xl p-6 text-center hover:scale-105 transform transition-all">
                    <div class="text-4xl mb-3">✈️</div>
                    <div class="text-3xl font-bold text-fun-700">${country.area}</div>
                    <div class="text-fun-600 font-medium">Areacode</div>
                </div>
            </div>
        </div>`
}

printHero()
printStats()