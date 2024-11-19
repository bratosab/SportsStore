import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { NgIf, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html",
    standalone: true,
    imports: [NgIf, RouterLink, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSummaryComponent {

    constructor(public cart: Cart) { }
}
