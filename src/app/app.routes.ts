import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';

const appRoutes: Routes = [
    {
      path: '',
      component: LandingComponent
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
