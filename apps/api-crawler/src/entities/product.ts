export class Product {
  name: string;
  barcode: string;
  brand: string;
  image: string;
  price: number;

  constructor(
    name: string,
    barcode: string,
    brand: string,
    image: string,
    price: number
  ) {
    this.name = name;
    this.barcode = barcode;
    this.brand = brand;
    this.image = image;
    this.price = price;
  }
}
