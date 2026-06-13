/* script.js - Logika Interaktif Ensiklopedia Shortcut oleh Mr.Rm19 */

document.addEventListener("DOMContentLoaded", function () {
    // Menjalankan fungsi pencarian jika ada input dengan id "shortcutSearch"
    const searchInput = document.getElementById("shortcutSearch");
    
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const filter = searchInput.value.toLowerCase();
            const tableRows = document.querySelectorAll("table tbody tr");

            tableRows.forEach(row => {
                // Mengambil teks dari kolom kombinasi tombol dan kolom fungsi
                const shortcutText = row.cells[0] ? row.cells[0].textContent.toLowerCase() : "";
                const descriptionText = row.cells[1] ? row.cells[1].textContent.toLowerCase() : "";

                // Jika kata kunci cocok dengan tombol atau deskripsi, tampilkan barisnya
                if (shortcutText.includes(filter) || descriptionText.includes(filter)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none"; // Sembunyikan jika tidak cocok
                }
            });
        });
    }
});