import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'image-ai',
        loadComponent: () => import('../app/components/image-ai/image-ai.component').then(c => c.ImageAiComponent)
    }
];
