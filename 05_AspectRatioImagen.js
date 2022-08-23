var Canvas = require('canvas');
/*
 *
 * ASPECT RATIO DE UNA IMAGEN
 *
 * Crear una función que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 *
 * Ejemplo:
 * - aspectRatioImagen("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png") -> "16:9"
 *
 */


const calculateAspectRatio = (url) => {
  return new Promise((resolve, reject) => {
    Canvas.loadImage(url).then((image) => {
      const width = image.width;
      const height = image.height;
      const ratio = gcd(width, height);
      const aspectRatio = `${width / ratio}:${height / ratio}`;
      resolve(aspectRatio);
    });
  });
}

function gcd(a, b) {
  return (b == 0) ? a : gcd(b, a % b);
}


calculateAspectRatio('https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png').then((ratio) => {
  console.log(ratio);
});