import { Vehicle } from './vehicle';
import { Client } from './client';

export class Reserve {
    vehicle: Vehicle;
    client: Client;
    fromDate: Date;
    toDate: Date;
    status: string;
}