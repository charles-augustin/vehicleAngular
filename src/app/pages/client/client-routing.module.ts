
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: ClientComponent,
    children: [
        {
            path: 'add-client',
            component: AddClientComponent
        },
        {
            path: 'view-client',
            component: ViewClientComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientRoutingModule {

}