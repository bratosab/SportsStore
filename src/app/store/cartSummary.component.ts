import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { NgIf, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html",
    standalone: true,
    imports: [NgIf, RouterLink, CurrencyPipe]
})
export class CartSummaryComponent {

    constructor(public cart: Cart) { }
}
