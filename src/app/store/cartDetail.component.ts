import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { NgIf, NgFor, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    templateUrl: "cartDetail.component.html",
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }
}
