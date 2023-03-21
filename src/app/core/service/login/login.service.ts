import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends BaseService {

    constructor(
        public http: HttpClient
    ) {
        super('/user/customer',http)
    }

    login(payload){
        return this.http.post(`${this.fullUrl}/login/${payload.username}/${payload.password}`,null)
    }
}
