const tagCloudContainer = ".tagcloud";
const texts = [
  "React Js",
  "Javascript",
  "NodeJS",
  "TypeScript",
  "MySQL",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
];
// const options = { radius: "150" };

// TagCloud(container, texts, options);

function generateTagCloud(x) {
  document.querySelector(tagCloudContainer).innerHTML = "";
  if (x.matches) {
    const options = { radius: "200" };
    TagCloud(tagCloudContainer, texts, options);
  } else {
    const options = { radius: "150" };
    TagCloud(tagCloudContainer, texts, options);
  }
}

const minSmallMedia = window.matchMedia("(min-width: 768px)");

generateTagCloud(minSmallMedia);

minSmallMedia.addEventListener("change", generateTagCloud);

const menuToggler = document.querySelector(".menu-toggler");
const menuItems = document.querySelector(".menu-items");

menuToggler.addEventListener("click", () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
});
