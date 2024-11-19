import { computed, Injectable, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable({ providedIn: "root" })
export class Cart {
  public lines = signal<CartLine[]>([]);
  public itemCount = computed(() =>
    this.lines().reduce((count, line) => {
      return count + line.quantity;
    }, 0)
  );
  public cartPrice = computed(() =>
    this.lines().reduce((total, line) => {
      return (total += line.quantity * line.product.price);
    }, 0)
  );

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines().find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.set([...this.lines(), new CartLine(product, quantity)]);
    }
  }

  updateQuantity(product: Product, quantity: number) {
    this.lines.update((lines) =>
      lines.map((line) => {
        if (line.product.id === product.id) {
          line.quantity = Number(quantity);
        }
        return line;
      })
    );
  }

  removeLine(id: number) {
    this.lines.set(this.lines().filter((line) => line.product.id !== id));
  }

  clear() {
    this.lines.set([]);
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
