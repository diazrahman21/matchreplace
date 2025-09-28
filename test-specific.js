// Test case spesifik sesuai permintaan user
const specificTest = [
    "https://idn00041.tigoals215.com/football/2800065-lille-vs-lyon.html"
];

const targetPath = "2800070-rennes-vs-lens.html";
const expectedOutput = "https://idn00041.tigoals215.com/football/2800070-rennes-vs-lens.html";

// Menggunakan fungsi yang sama dengan HTML
function isTigaoalsUrl(url) {
    return url.includes('tigoals') || url.includes('tigagoals');
}

function replaceTigagoalsPath(url, newPath) {
    // Replace everything after /football/ with new path
    return url.replace(/\/football\/.*/, '/football/' + newPath);
}

function replaceMatchSection(Link, newSection) {
    const updatedLink = [];
    
    Link.forEach(link => {
        let updatedLink;
        
        if (isTigaoalsUrl(link)) {
            updatedLink = replaceTigagoalsPath(link, newSection);
        } else {
            updatedLink = link.replace(/\/id\/.*/, '/id/' + newSection);
        }
        
        updatedLink.push(updatedLink);
    });
    
    return updatedLink;
}

console.log("=== Test Case Spesifik User ===");
console.log("Input:", specificTest[0]);
console.log("Target Path:", targetPath);
console.log("Expected Output:", expectedOutput);

const result = replaceMatchSection(specificTest, targetPath);
console.log("Actual Output:", result[0]);
console.log("✅ Test Result:", result[0] === expectedOutput ? "BERHASIL" : "GAGAL");

if (result[0] !== expectedOutput) {
    console.log("❌ Error: Output tidak sesuai dengan yang diharapkan");
} else {
    console.log("🎉 Perfect! Logika Tigagoals sudah benar");
}