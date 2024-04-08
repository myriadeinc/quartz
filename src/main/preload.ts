const { ipcRenderer } = require("electron");

// Preload LCP image
ipcRenderer.on("preload-lcp-image", (event, imagePath) => {
  const image = new Image();
  image.src = imagePath;
  console.log(image, "image");
});
