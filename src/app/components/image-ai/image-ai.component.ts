import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleGenAiService } from '../../services/google-gen-ai/google-gen-ai.service';
import { ImageHelperService } from '../../helpers/image-helpers/image-helper.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-ai',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './image-ai.component.html',
  styleUrl: './image-ai.component.scss'
})
export class ImageAiComponent {
  imageSrc: string | ArrayBuffer | null = '';
  file: any;
  prompt: string = 'Generate the UX strategy from the image or sketch in details';

  constructor(
    private googleGenAi: GoogleGenAiService,
    private imageHelper: ImageHelperService
  ) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }

    this.generateUxAi();
  }

  generateUxAi() {
    this.imageHelper.convertImageToBase64(this.file).then(base64Img => {
      let result = this.googleGenAi.generateUX(this.prompt, base64Img);
      console.log(result);
    });
  }

  changeImage() {
    this.imageSrc = '';
  }
}
