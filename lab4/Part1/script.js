const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


// 1. Create image data object

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";


// 2. Add images to thumbnails

for (const imgData of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + imgData.filename;
  newImage.alt = imgData.alt;
  newImage.tabIndex = 0; // Make focusable

  // Click → update big image
  newImage.addEventListener("click", () =>
    updateDisplayedImage(newImage.src, newImage.alt)
  );

  // Keyboard (Enter key)
  newImage.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateDisplayedImage(newImage.src, newImage.alt);
    }
  });

  thumbBar.appendChild(newImage);
}


// 3. Update displayed image

function updateDisplayedImage(src, alt) {
  displayedImage.src = src;
  displayedImage.alt = alt;
}


// 4. Darken / Lighten toggle

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // Stretch goal: toggle dark class in one line
  btn.classList.toggle("dark");
});
