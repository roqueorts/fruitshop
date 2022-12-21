export class Product {
    id: number | undefined;
    name: string | undefined;
    price: string | undefined;
  //roduct
}

export class Purchase {
    product: Product | undefined;
    quantity: number | undefined;
    /*Purchase(){
        this.product = undefined;
        this.quantity = 0;
       };*/
  constructor(p: Product, quantity: number){
     this.product = p;
     this.quantity = quantity;
    }
}