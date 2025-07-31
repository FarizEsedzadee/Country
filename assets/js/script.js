const countriesContainer = document.querySelector('#countries-grid');
const loadMoreBtn = document.querySelector('#load-more');
const stats = document.querySelector('#stats-container')
let cardsOnScreen = 12;


function printStats() {
    stats.innerHTML = `<div class="text-center p-6 bg-white rounded-3xl fun-shadow hover:scale-105 transform transition-all">
                    <div class="text-5xl mb-3">🌍</div>
                    <div class="text-3xl font-bold text-fun-700">${data.length}</div>
                    <div class="text-fun-600 font-medium">Ölkə</div>
                </div>
                <div class="text-center p-6 bg-white rounded-3xl fun-shadow hover:scale-105 transform transition-all">
                    <div class="text-5xl mb-3">🗣️</div>
                    <div class="text-3xl font-bold text-fun-700">7000+</div>
                    <div class="text-fun-600 font-medium">Dil</div>
                </div>
                <div class="text-center p-6 bg-white rounded-3xl fun-shadow hover:scale-105 transform transition-all">
                    <div class="text-5xl mb-3">🏛️</div>
                    <div class="text-3xl font-bold text-fun-700">1000+</div>
                    <div class="text-fun-600 font-medium">UNESCO</div>
                </div>
                <div class="text-center p-6 bg-white rounded-3xl fun-shadow hover:scale-105 transform transition-all">
                    <div class="text-5xl mb-3">🎭</div>
                    <div class="text-3xl font-bold text-fun-700">∞</div>
                    <div class="text-fun-600 font-medium">InnoHub</div>
                </div>`
}
printStats()

function printCards(fillData = data) {
    console.log(fillData);

    let containerData = '';
    fillData
        .slice(0, cardsOnScreen)
        .forEach((item) => {
            containerData += `<a target="_blank" href="./detail.html?alpha3Code=${item.alpha3Code}" class="country-card fun-card rounded-3xl overflow-hidden cursor-pointer group" data-continent="europe" data-population="large" data-language="indo-european">
                        <div class="relative h-48 overflow-hidden">
                            <img src="${item.flag}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div class="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                                <span class="text-3xl">${item.alpha2Code}</span>
                            </div>
                        </div>
                        <div class="p-6 bg-white">
                            <h3 class="text-2xl font-bold mb-2 text-fun-700">${item.name}</h3>
                            <p class="text-fun-600 text-sm mb-4 font-medium">🌍 ${item.subregion} • 👥 ${item.population.toLocaleString('de', 'DE')}</p>
                            <div class="flex items-center justify-between">
                                <span class="text-fun-500 font-semibold">🏛️ Paytaxt: ${item.capital}</span>
                                <div class="flex space-x-1">
                                    <div class="w-2 h-2 bg-fun-400 rounded-full animate-pulse"></div>
                                    <div class="w-2 h-2 bg-fun-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                                    <div class="w-2 h-2 bg-fun-600 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                                </div>
                            </div>
                            <div class="mt-4 flex flex-wrap gap-2">
                                <span class="bg-fun-100 text-fun-700 px-2 py-1 rounded-full text-xs font-medium">${item.currencies?.[0]?.symbol || "N/A"}</span>
                                <span class="bg-fun-100 text-fun-700 px-2 py-1 rounded-full text-xs font-medium">${item.currencies?.[0]?.code || "N/A"}</span>
                                <span class="bg-fun-100 text-fun-700 px-2 py-1 rounded-full text-xs font-medium">${item.currencies?.[0]?.name || "N/A"}</span>
                            </div>
                        </div>
                    </a>`
        })
    countriesContainer.innerHTML = containerData;
}
printCards()

function loadMore() {
    cardsOnScreen += 12;
    if (data.length > cardsOnScreen) {
        printCards();
    }
    else {
        loadMoreBtn.style.display = "none";
    }
}

const region = document.querySelector('#continent-filter');
const searchInp = document.querySelector('#search-input');
const regionsArr = new Set(data.map(item => item.region));


function getRegions() {
    regionsArr.forEach(item => {
        region.innerHTML += `<option onclick="printFiltered(${item})" value="${item}">${item}</option>`;
    })
}
getRegions()

let isActiveRegion = "";

function printFiltered(reg) {
    isActiveRegion = reg || isActiveRegion;
    const fillRegion = data.filter(item => isActiveRegion ? isActiveRegion == reg : true)
    printCards(fillRegion)
    console.log(reg);

}

function searchFilter() {
    const searchTerm = searchInp.value.toLowerCase();
    const fillData = data.filter(item => {
        const matchName = item.name.toLowerCase().includes(searchTerm);
        const matchRegion = isActiveRegion ? item.region == isActiveRegion : true;
        return matchName && matchRegion;
    });
    printCards(fillData);
}


region.addEventListener('change', e => {
    printFiltered(e.target.value);
    searchFilter();
});

searchInp.addEventListener('input', searchFilter);


const resetBtn = document.querySelector('#reset-filters');
resetBtn.addEventListener('click', () => {
    region.value = ""; 
    searchInp.value = "";
    isActiveRegion = "";
    printCards(data);
})