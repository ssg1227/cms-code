import { Component, ViewChild, ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as Long from 'long';

@Component({
  selector: 'app-image-resizer',
  templateUrl: './image-resizer.component.html',
  styleUrls: ['./image-resizer.component.css']
})
export class ImageResizerComponent {
  @ViewChild('resizedCanvas', { static: false }) resizedCanvas!: ElementRef<HTMLCanvasElement>;

  targetWidth = 224;
  targetHeight = 224;

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const img = new Image();
    img.onload = () => this.processImage(img);
    img.src = URL.createObjectURL(file);
  }

  async processImage(image: HTMLImageElement): Promise<void> {
    tf.engine().startScope();

    const tensor = tf.browser.fromPixels(image);
    const resized = tf.image.resizeBilinear(tensor, [this.targetHeight, this.targetWidth]);
    const uint8Array = await tf.browser.toPixels(resized);

    // Draw to canvas for visualization
    const canvas = this.resizedCanvas.nativeElement;
    canvas.width = this.targetWidth;
    canvas.height = this.targetHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const imageData = new ImageData(new Uint8ClampedArray(uint8Array), this.targetWidth, this.targetHeight);
      ctx.putImageData(imageData, 0, 0);
    }

    tf.engine().endScope();
  }
}
