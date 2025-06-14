// src/assets/js/image-resizer.js

// Ensure TensorFlow is available globally
import * as tf from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.14.0/dist/tf.min.js';

/**
 * Resizes an image (Base64 or URL) to the specified dimensions.
 * Returns a resized image as a Base64 data URL.
 * 
 * @param {string} imageUrl - Base64 or standard image URL.
 * @param {number} targetWidth 
 * @param {number} targetHeight 
 * @returns {Promise<string>} Base64 string of resized image
 */
export async function resizeImage(imageUrl, targetWidth, targetHeight) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        const imageTensor = tf.browser.fromPixels(image);
        const resizedTensor = tf.image.resizeBilinear(imageTensor, [targetHeight, targetWidth]);
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        tf.browser.toPixels(resizedTensor, canvas).then(() => {
          const resizedDataUrl = canvas.toDataURL("image/jpeg");
          resolve(resizedDataUrl);
          resizedTensor.dispose();
          imageTensor.dispose();
        });
      } catch (err) {
        reject(err);
      }
    };
    image.onerror = reject;
    image.src = imageUrl;
  });
}
