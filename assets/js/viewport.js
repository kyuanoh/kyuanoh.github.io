const baseViewportWidth = 1120;
const initialScale = Math.min(1, window.screen.width / baseViewportWidth);
const viewportMeta = document.createElement("meta");

viewportMeta.name = "viewport";
viewportMeta.content = `width=${baseViewportWidth}, initial-scale=${initialScale}, minimum-scale=${initialScale}, maximum-scale=5`;

document.head.appendChild(viewportMeta);
