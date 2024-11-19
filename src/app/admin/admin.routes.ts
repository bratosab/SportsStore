import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";

export const adminRoutes: Routes = [
  {
    path: "admin",
    children: [
      {
        path: "auth",
        loadComponent: () =>
          import("./auth.component").then((c) => c.AuthComponent),
      },
      {
        path: "main",
        loadComponent: () =>
          import("./admin.component").then((c) => c.AdminComponent),
        canActivate: [AuthGuard],
        children: [
          { path: "products/:mode/:id", component: ProductEditorComponent },
          { path: "products/:mode", component: ProductEditorComponent },
          { path: "products", component: ProductTableComponent },
          { path: "orders", component: OrderTableComponent },
          { path: "**", redirectTo: "products" },
        ],
      },
      { path: "**", redirectTo: "auth" },
    ],
  },
];
