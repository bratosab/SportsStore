import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { mapToCanActivate, RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
    {
        path: "store", component: StoreComponent,
        canActivate: mapToCanActivate([StoreFirstGuard])
    },
    {
        path: "cart", component: CartDetailComponent,
        canActivate: mapToCanActivate([StoreFirstGuard])
    },
    {
        path: "checkout", component: CheckoutComponent,
        canActivate: mapToCanActivate([StoreFirstGuard])
    },
    {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
            .then(m => m.AdminModule),
        canActivate: mapToCanActivate([StoreFirstGuard])
    },
    { path: "**", redirectTo: "/store" }
])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
