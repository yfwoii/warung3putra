document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>Tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    // Populate Modal
    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    // Generate WhatsApp Message Link
    const nohp = "+62 822-1509-6018"; // Ganti dengan nomor WhatsApp yang sesuai
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo, saya ingin menanyakan produk ini: ${judul}. Gambar produk: ${gambar}.`;

    // Set WhatsApp link on the "Beli Produk Ini" button
    document.querySelector(".btnBeli").href = pesan;
  });
});
