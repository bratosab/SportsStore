import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
import { FormsModule } from "@angular/forms";
import { NgIf, NgFor } from "@angular/common";

@Component({
    templateUrl: "orderTable.component.html",
    standalone: true,
    imports: [FormsModule, NgIf, NgFor]
})
export class OrderTableComponent {
    includeShipped = false;

    constructor(private repository: OrderRepository) {}

    getOrders(): Order[] {
        return this.repository.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }
 
    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id: number) {
        this.repository.deleteOrder(id);
    }
}
