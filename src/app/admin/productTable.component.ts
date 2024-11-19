import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { NgFor, CurrencyPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    templateUrl: "productTable.component.html",
    standalone: true,
    imports: [NgFor, RouterLink, CurrencyPipe]
})
export class ProductTableComponent {

    constructor(private repository: ProductRepository) { }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}
