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
  imageSrc: string | ArrayBuffer | null = 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png';
  file: any;
  prompt: string = 'Generate the UX strategy from the image or sketch in details';

  constructor(
    private googleGenAi: GoogleGenAiService,
    private imageHelper: ImageHelperService
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file: File = input.files[0];
      this.file = file;
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };

      reader.readAsDataURL(file);
    }

    this.generateUxAi();
  }

  generateUxAi() {
    this.imageHelper.convertImageToBase64(this.file).then(base64Img => {
      this.googleGenAi.generateUX(this.prompt, base64Img);
    });
  }
}
