import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class AuthService {
    constructor (private _http: Http) {}
    
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('mongodb://admin_jeff:wewillrockyou@ds023448.mlab.com:23448/messenger/user', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('/mongodb://admin_jeff:wewillrockyou@ds023448.mlab.com:23448/messenger/signin', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
    
    logout() {
        localStorage.clear();
    }
    
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}