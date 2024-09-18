import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GoogleGenAiService {
  private apiKey = 'YOUR_API_KEY';
  private modelName: string = "gemini-1.5-flash";

  genAI: any = new GoogleGenerativeAI(this.apiKey);
  model: any = this.genAI.getGenerativeModel({ model: this.modelName });

  constructor() { }

  async generateUX(prompt: string, image: any) {
    const result = await this.model.generateContent([prompt, image]);
    console.log(result.response.text());
  }
}
