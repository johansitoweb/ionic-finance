import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then( m => m.HomePage)
            },
            {
                path: 'card',
                loadComponent: () => import('./card/card.page').then( m => m.CardPage)
            },
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
            },
            {
                path: 'transactions',
                loadComponent: () => import('./transactions/transactions.page').then( m => m.TransactionsPage)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },
];