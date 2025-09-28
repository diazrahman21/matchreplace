// Test untuk sistem dual input
const mixedUrls = [
    "https://example.com/en/id/basketball/game456.html?data=a",
    "https://anothersite.net/id/volleyball/match789/result",
    "https://idn00041.tigoals215.com/football/2800065-lille-vs-lyon.html",
    "https://idn00041.tigoals215.com/football/2800066-psg-vs-marseille.html",
    "https://superrabbit.com/id/soccer/match123.html"
];

// Input yang berbeda untuk setiap jenis
const superRabbitPath = "football/new-match999.html";
const tigagoalsPath = "2800070-rennes-vs-lens.html";

// Fungsi yang sama dengan HTML
function isTigaoalsUrl(url) {
    return url.includes('tigoals') || url.includes('tigagoals');
}

function replaceTigagoalsPath(url, newPath) {
    return url.replace(/\/football\/.*/, '/football/' + newPath);
}

function replaceMatchSection(superRabbitPath, tigagoalsPath) {
    const updatedLinks = [];
    const processedCount = { superRabbit: 0, tigagoals: 0, skipped: 0 };
    
    mixedUrls.forEach(link => {
        let updatedLink = link;
        
        if (isTigaoalsUrl(link)) {
            if (tigagoalsPath) {
                updatedLink = replaceTigagoalsPath(link, tigagoalsPath);
                processedCount.tigagoals++;
            } else {
                processedCount.skipped++;
            }
        } else {
            if (superRabbitPath) {
                updatedLink = link.replace(/\/id\/.*/, '/id/' + superRabbitPath);
                processedCount.superRabbit++;
            } else {
                processedCount.skipped++;
            }
        }
        
        updatedLinks.push(updatedLink);
    });
    
    return { links: updatedLinks, counts: processedCount };
}

console.log("=== Test Dual Input System ===");
console.log("Super Rabbit Input:", superRabbitPath);
console.log("Tigagoals Input:", tigagoalsPath);
console.log();

console.log("Input URLs:");
mixedUrls.forEach((url, index) => {
    const type = isTigaoalsUrl(url) ? 'Tigagoals' : 'Super Rabbit';
    console.log(`${index + 1}. [${type}] ${url}`);
});

console.log();
console.log("Output URLs:");
const result = replaceMatchSection(superRabbitPath, tigagoalsPath);
result.links.forEach((url, index) => {
    const type = isTigaoalsUrl(mixedUrls[index]) ? 'Tigagoals' : 'Super Rabbit';
    const isChanged = url !== mixedUrls[index];
    console.log(`${index + 1}. [${type}] ${url} ${isChanged ? '✅ CHANGED' : '❌ UNCHANGED'}`);
});

console.log();
console.log("Processing Summary:");
console.log(`- Super Rabbit processed: ${result.counts.superRabbit}`);
console.log(`- Tigagoals processed: ${result.counts.tigagoals}`);
console.log(`- Skipped: ${result.counts.skipped}`);
console.log(`- Total: ${result.links.length}`);

// Test dengan hanya satu input
console.log("\n=== Test dengan hanya Super Rabbit Input ===");
const resultSROnly = replaceMatchSection(superRabbitPath, null);
console.log(`Super Rabbit processed: ${resultSROnly.counts.superRabbit}, Skipped: ${resultSROnly.counts.skipped}`);

console.log("\n=== Test dengan hanya Tigagoals Input ===");
const resultTGOnly = replaceMatchSection(null, tigagoalsPath);
console.log(`Tigagoals processed: ${resultTGOnly.counts.tigagoals}, Skipped: ${resultTGOnly.counts.skipped}`);