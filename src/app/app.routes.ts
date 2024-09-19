import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/components/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'image-ai',
        loadComponent: () => import('../app/components/image-ai/image-ai.component').then(c => c.ImageAiComponent)
    }
];
