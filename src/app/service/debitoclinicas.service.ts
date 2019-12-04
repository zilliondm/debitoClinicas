import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DebitoClinicasService {
    url: string = environment.backendurl;

    constructor(private http: HttpClient) { 

    }

    /**
     * getFacturasEnc
     */
    public getFacturasEnc() {
        const url = `${this.url}/facturasenc`;
        return this.http.get<any>(url);
    }
}