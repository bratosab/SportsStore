import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: "admin.component.html",
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class AdminComponent {

    constructor(private auth: AuthService,
                private router: Router) { }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}
