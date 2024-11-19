import { inject, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
  CanActivateChildFn,
  CanActivateFn,
} from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable({
    providedIn: "root",
  })
export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}

// export const StoreFirstGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   let firstNavigation = true;
//   const router = inject(Router);

//   const checkNavigation = () => {
    
//     if (firstNavigation) {
//       firstNavigation = false;
//       if (route.component != StoreComponent) {
//         router.navigateByUrl("/");
//         return false;
//       }
//     }
//     return true;
//   };

//   return checkNavigation();
// };
