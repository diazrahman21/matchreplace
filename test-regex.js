// Test script untuk memverifikasi logika regex
const testUrls = [
    // Super Rabbit URLs
    "https://example.com/en/id/basketball/game456.html?data=a",
    "https://anothersite.net/id/volleyball/match789/result", 
    "https://superrabbit.com/id/soccer/match123.html",
    
    // Tigagoals URLs
    "https://idn00041.tigoals215.com/football/2800065-lille-vs-lyon.html",
    "https://idn00041.tigoals215.com/football/2800066-psg-vs-marseille.html"
];

// Fungsi yang sama dengan yang ada di HTML
function isTigaoalsUrl(url) {
    const isTigagoals = url.includes('tigoals') || url.includes('tigagoals');
    console.log(`URL detection: ${url} -> ${isTigagoals ? 'Tigagoals' : 'Super Rabbit'}`);
    return isTigagoals;
}

function replaceTigagoalsPath(url, newPath) {
    // Replace everything after /football/ with new path
    const newUrl = url.replace(/\/football\/.*/, '/football/' + newPath);
    console.log(`Tigagoals: ${url} -> ${newUrl}`);
    return newUrl;
}

function replaceMatchSection(links, newSection) {
    const updatedLinks = [];
    
    links.forEach(link => {
        let updatedLink;
        
        if (isTigaoalsUrl(link)) {
            updatedLink = replaceTigagoalsPath(link, newSection);
        } else {
            updatedLink = link.replace(/\/id\/.*/, '/id/' + newSection);
        }
        
        updatedLinks.push(updatedLink);
    });
    
    return updatedLinks;
}

// Test cases
console.log("=== Testing Super Rabbit URLs dengan input 'football/match999.html' ===");
const superRabbitResult = replaceMatchSection(
    testUrls.filter(url => !isTigaoalsUrl(url)), 
    'football/match999.html'
);
superRabbitResult.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

console.log("\n=== Testing Tigagoals URLs dengan input '2800070-rennes-vs-lens.html' ===");
const tigagoalsResult = replaceMatchSection(
    testUrls.filter(url => isTigaoalsUrl(url)), 
    '2800070-rennes-vs-lens.html'
);
tigagoalsResult.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

console.log("\n=== Testing mixed URLs ===");
const mixedResult = replaceMatchSection(testUrls, '2800070-rennes-vs-lens.html');
mixedResult.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});