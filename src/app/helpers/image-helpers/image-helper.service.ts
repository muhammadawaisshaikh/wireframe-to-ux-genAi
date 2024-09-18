import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHelperService {
  constructor() { }

  convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]); // Only the base64 part
      };
      reader.onerror = () => {
        reject('Image could not be converted to base64');
      };
    });
  }
}
