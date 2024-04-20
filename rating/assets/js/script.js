/**
 * MOBILE NAVBAR TOGGLE
 */
"use strict";

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

const inputImg = document.querySelector("input[type='file']#image");

inputImg.addEventListener("change", function () {
  const textImg = document.querySelector("label[for='image'] span.text-img");

  textImg.textContent = this.files[0].name;
});

const dataReview = [
  {
    id: 1,
    reviewTitle: "Pelayanan Motor",
    bintang: 5,
    reviewName: "Olivia Hall",
    reviewDate: "12 Januari 2022",
    reviewDesc: "Pelayanan motor yang sangat bagus",
    foto: ["aerox.png", "beat.jpeg"],
  },

  {
    id: 2,
    reviewTitle: "Service Motor",
    bintang: 4,
    reviewName: "James Taylor",
    reviewDate: "15 Februari 2022",
    reviewDesc: "Hasil service motor sangat bagus",
    foto: ["klx.png"],
  },

  {
    id: 3,
    reviewTitle: "Ganti Oli Mesin",
    bintang: 3,
    reviewName: "John Doe",
    reviewDate: "18 Maret 2022",
    reviewDesc: "Ganti oli mesin sangat cepat",
    foto: ["beat.jpeg"],
  },

  {
    id: 4,
    reviewTitle: "Penggantian Ban",
    bintang: 5,
    reviewName: "Jane Doe",
    reviewDate: "21 April 2022",
    reviewDesc: "Penggantian ban sangat cepat dan bagus",
    foto: ["cbr.png"],
  },

  {
    id: 5,
    reviewTitle: "Penggantian Lampu Depan dan Belakang",
    bintang: 4,
    reviewName: "Smith Doe",
    reviewDate: "24 Mei 2022",
    reviewDesc: "Penggantian lampu depan dan belakang sangat cepat dan bagus",
    foto: ["nmax.png"],
  },
];

dataReview.forEach((review) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review");

  const reviewHeader = document.createElement("div");
  reviewHeader.classList.add("review-header");

  const reviewInfo = document.createElement("h3");
  reviewInfo.classList.add("review-info");
  reviewInfo.textContent = `${review.reviewTitle} - ${review.reviewName}`;

  const ratingValue = document.createElement("div");
  ratingValue.classList.add("rating-value");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = `<i class="bx bxs-star"></i>`;

    for (let j = 1; j <= review.bintang; j++) {
      if (i < review.bintang) {
        star.classList.add("active-star");
      }
    }
    ratingValue.appendChild(star);
  }

  const reviewDate = document.createElement("p");
  reviewDate.classList.add("review-date");
  reviewDate.textContent = review.reviewDate;

  reviewHeader.appendChild(reviewInfo);
  reviewHeader.appendChild(ratingValue);
  reviewHeader.appendChild(reviewDate);

  const reviewDescription = document.createElement("p");
  reviewDescription.classList.add("review-description");
  reviewDescription.textContent = review.reviewDesc;

  reviewCard.appendChild(reviewHeader);
  reviewCard.appendChild(reviewDescription);

  review.foto.forEach((image, index) => {
    const reviewImg = document.createElement("img");
    reviewImg.classList.add("review-img");
    reviewImg.src = `assets/images/${image}`;
    reviewImg.setAttribute("data-index", index);
    reviewCard.appendChild(reviewImg);
    reviewImg.addEventListener("click", function () {
      // Mendapatkan modal
      const modal = document.getElementById("myModal");

      // Mendapatkan elemen gambar di dalam modal
      const modalImg = modal.querySelector(".modal-img");

      // Mengatur src gambar di dalam modal menjadi src dari gambar yang diklik
      modalImg.src = this.src;

      // Menampilkan modal
      modal.style.display = "block";

      const prevBtn = document.querySelector(".modal-prev");
      const nextBtn = document.querySelector(".modal-next");

      let reviewFotoData = review.foto;
      let currentIndex = index;

      // Menambahkan event listener untuk tombol-tombol panah
      prevBtn.addEventListener("click", function () {
        if (currentIndex === 0) {
          modalImg.src = `assets/images/${reviewFotoData[currentIndex]}`;
        } else {
          modalImg.src = `assets/images/${reviewFotoData[currentIndex - 1]}`;
        }
      });

      nextBtn.addEventListener("click", function () {
        if (currentIndex === reviewFotoData.length - 1) {
          modalImg.src = `assets/images/${reviewFotoData[currentIndex]}`;
        } else {
          modalImg.src = `assets/images/${reviewFotoData[currentIndex + 1]}`;
        }
      });
    });
  });

  // Menambahkan event listener untuk menampilkan modal ketika gambar di klik

  // Menambahkan event listener untuk menutup modal ketika tombol close di klik
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });

  // Menambahkan event listener untuk menutup modal ketika area di luar modal di klik
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navigasi gambar di modal

  document.querySelector(".review-list").appendChild(reviewCard);
});
