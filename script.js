// Fungsi Toggle Menu Navigasi
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

// Daftar Harga dan Kategori
const dataHarga = [
    { kategori: "kaos", nama: "Kaos | Cotton Bamboo", harga: 85000 },
    { kategori: "kaos", nama: "Kaos | Cotton Combed 24s", harga: 75000 },
    { kategori: "kaos", nama: "Kaos | Cotton Combed 30s", harga: 75000 },
    { kategori: "jaket", nama: "Jaket | Outdoor (Taslan Baloon)", harga: 185000 },
    { kategori: "jaket", nama: "Jaket | Coach (Taslan)", harga: 155000 },
    { kategori: "jaket", nama: "Jaket | Parka (Twist/Drill)", harga: 175000 },
    { kategori: "kemeja", nama: "Kemeja/PDH | American Drill Grade B", harga: 135000 },
    { kategori: "kemeja", nama: "Kemeja/PDH | American Drill Grade A", harga: 145000 },
    { kategori: "rompi", nama: "Rompi | American Drill Grade B", harga: 125000 },
    { kategori: "rompi", nama: "Rompi | American Drill Grade A", harga: 130000 }
];

// Fungsi menampilkan daftar harga
function tampilkanHarga(kategori) {
    const container = document.getElementById("price-list");
    container.innerHTML = "";

    const filteredData = kategori === "all" ? dataHarga : dataHarga.filter(item => item.kategori === kategori);

    filteredData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${item.nama}</h2>
            <p>Harga: <strong>Rp ${item.harga.toLocaleString()}</strong></p>
            <a href="https://wa.me/6281327414126?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.nama)}%20seharga%20Rp${item.harga.toLocaleString()}" target="_blank" class="wa-button">
                WhatsApp
            </a>
        `;
        container.appendChild(card);
    });
}

// Event Listener untuk filter kategori
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        tampilkanHarga(button.dataset.category);
    });
});

// Menampilkan semua harga saat pertama kali dimuat
tampilkanHarga("all");
