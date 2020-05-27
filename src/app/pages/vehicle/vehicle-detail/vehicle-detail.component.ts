import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as  faHeartFilled } from '@fortawesome/free-regular-svg-icons';
import { Vehicle } from 'src/app/shared/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { baseURL } from '../../../shared/baseurl';
import { Favorite } from 'src/app/shared/favorite';

@Component({
    selector: 'vehicle-detail',
    templateUrl: './vehicle-detail.component.html',
    styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {

    }
    baseURL = baseURL;
    favorites: Favorite;
    vehicle: Vehicle;
    favorite: boolean = false;
    vehicleID: string;
    stars = [1, 2, 3, 4, 5];
    selectedValue: Number;
    faStar = faStar;
    faHeart = faHeart;
    faHeartFilled = faHeartFilled;
    ngOnInit() {
        this.vehicleID = this.route.snapshot.params['id'];
        this.getVehicleInfo(this.vehicleID);
    }

    countStar(count) {
        this.selectedValue = count;
    }

    getVehicleInfo(id: string) {
        this.vehicleService.getVehicle(id)
            .subscribe(res => {
                this.vehicle = res;
                console.log(this.vehicle);
                this.getFavorites();
            }, error => { throw new error });
    }

    getFavorites() {
        this.vehicleService.getFavorites()
            .subscribe(res => {
                this.favorites = res;
                console.log(this.favorites);
                
                this.favorites.vehicles.forEach(a => {
                    if(a._id+'' == this.vehicleID)
                        this.favorite = true;
                })
            });
    }

    addToFavorites(id: string) {

        const data = {
            vehicles: id
        }

        this.vehicleService.postFavorites(data)
            .subscribe(res => {
                console.log(res);
                this.favorite = true;
            });
    }
    
    removeFavorites(id:string) {
        this.vehicleService.removeFavourites(id)
            .subscribe(res => {
                this.favorite = false;
            })
    }
}