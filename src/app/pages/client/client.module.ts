import { AddClientComponent } from "./add-client/add-client.component";
import { ViewClientComponent } from './view-client/view-client.component';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const components = [
    AddClientComponent,
    ViewClientComponent,
    ClientComponent
]

@NgModule({
    imports:[
        ThemeModule,
        ClientRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatCardModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        ...components
    ]
})

export class ClientModule {
    
}