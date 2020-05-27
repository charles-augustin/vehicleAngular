import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { baseURL } from 'src/app/shared/baseurl';
import { Favorite } from 'src/app/shared/favorite';

@Component({
    selector: 'app-favorites',
    templateUrl: 'favorites.component.html',
    styleUrls: ['favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    baseURL;
    favorites: Favorite;
    error;
    constructor(private vehicleService: VehicleService) {
        this.baseURL = baseURL;
    }

    ngOnInit() {
        this.getFavorites();
    }

    getFavorites() {
        this.vehicleService.getFavorites()
            .subscribe(res => {
                this.favorites = res;
                console.log(this.favorites);
            }, err => console.log(err)
            )
    }
}