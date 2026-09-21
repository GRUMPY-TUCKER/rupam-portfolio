import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome.component';
import { PortfolioPage } from './components/portfolio-page/portfolio-page.component';

export const routes: Routes = [
    {
        path: '',
        component: Welcome
    },
    {
        path: 'portfolio',
        component: PortfolioPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];