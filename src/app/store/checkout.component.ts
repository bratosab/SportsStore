import { Component } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"],
    standalone: true,
    imports: [NgIf, RouterLink, FormsModule]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository,
                public order: Order) {}

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
