import type { DrawingContext } from '../models/drawing-context';
import { getImageFromBlob } from './get-image-from-blob';

export function getLaunchImage({ canvas, previewCanvas, context }: DrawingContext): void {
  if ('launchQueue' in window && canvas && previewCanvas && context) {
    window.launchQueue.setConsumer(async params => {
      const [handle] = params.files;
      if (handle) {
        const file = await handle.getFile();
        const image = await getImageFromBlob(file);
        // TODO: Update document context (file name)
        // TODO: Duplicated from open.js, unify.
        canvas.width = previewCanvas.width = image.width;
        canvas.height = previewCanvas.height = image.height;
        context.fillStyle = 'white';
        context.fillRect(0, 0, image.width, image.height);
        context.drawImage(image, 0, 0);
      }
    });
  }
}