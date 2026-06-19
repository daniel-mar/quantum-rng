import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QuantumService {
    
    constructor(private http: HttpClient) {}

        getRandom() {
            // Path for dev (w/ proxy) and prod env
            return this.http.get<{random_number: number}>('/api/random');
        }

}
