export class Producto{
  id: number = 0;
  title: string = '';
  category: string = '';
  image: string = '';
  price: number = 0;
  description: string = '';

  constructor(id:number,title:string,category:string,image:string,price:number,description:string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}
