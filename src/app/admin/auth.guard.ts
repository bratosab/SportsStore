import { inject, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChildFn,
  CanActivateFn,
} from "@angular/router";
import { AuthService } from "../model/auth.service";

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(AuthService);

  if (!auth.authenticated) {
    router.navigateByUrl("/admin/auth");
    return false;
  }
  return true;
};
