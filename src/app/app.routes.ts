import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
    },
    {
      path: 'ads/:id',
      // component: PortfolioViewComponent,
      loadChildren: () => import('./views/ads/ads.module').then(m => m.AdsModule)
    },
  ];
  
  export const AppRoutes = RouterModule.forRoot(appRoutes, {
    useHash: true,
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules});
