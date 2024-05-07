import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  private readonly products= [
    {
      id: 1,
      nombre: 'Celular Samsung Note 10',
      descripcion:'Celular de última generación de la gama Note',
      precio: 12000,
    },
  ];

  getAllProducts(): any[]{
    return this.products;
  }

  updateProductById(id: number, updateProduct: any): void{
    const index = this.products.findIndex(product => product.id === +id);
    if(index !== -1){
      this.products[index] = {...this.products[index], ...updateProduct};
    }
  }

  deleteProductById(id: number): void{
    const index = this.products.findIndex(product => product.id === +id);
    if(index !== -1) {
      this.products.splice(index, 1);
    }
  }

  addProduct(newProduct: any): void{
    const newId = this.products.length+1;
    const product = {id: newId, ...newProduct};
    this.products.push(product);
  }
}