import {Component} from "angular2/core";
import {Router} from "angular2/router";
@Component({
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </section>
    `
})
export class LogoutComponent {
    onLogout() {
    }
}