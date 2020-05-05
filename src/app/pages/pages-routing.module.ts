import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { ChatComponent } from './chat/chat.component';
import { GridComponent } from './ui-features/grid/grid.component';
import { GridViewComponent } from './grid-view/grid-view.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'vehicle',
      loadChildren: () => import('./vehicle/vehicle.module')
        .then(m => m.VehicleModule)
    },
    {
      path: 'reservation',
      loadChildren: () => import('./reservation/reservation.module')
        .then(m => m.ReservationModule)
    },
    {
      path: 'client',
      loadChildren: () => import('./client/client.module')
        .then(m => m.ClientModule)
    },
    {
      path: 'reservation-history',
      component: ReservationHistoryComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    },
    {
      path: 'grid-view',
      component: GridViewComponent
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
