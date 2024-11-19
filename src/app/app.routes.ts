import { mapToCanActivate, Routes } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { StoreFirstGuard } from "./storeFirst.guard";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { adminRoutes } from "./admin/admin.routes";

export const routes: Routes = [
  {
    path: "store",
    component: StoreComponent,
    canActivate: mapToCanActivate([StoreFirstGuard]),
  },
  {
    path: "cart",
    component: CartDetailComponent,
    canActivate: mapToCanActivate([StoreFirstGuard]),
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: mapToCanActivate([StoreFirstGuard]),
  },
  ...adminRoutes,
  { path: "**", redirectTo: "/store" },
];
