import { Controller, Get, Render, Post, Request, Body, Response, Param, BadRequestException} from '@nestjs/common';
import { ProductService } from 'src/services/product.service';
import { ProductDto } from 'src/dtos/product.dto';

@Controller()
export class ProductController{

    constructor(private readonly productService:ProductService){}

    @Get('/home')
    @Render('Index')
    async getIndex(@Request() req){
        const products = await this.productService.getAllProducts();
        return { title: 'Index', products};
    }

    @Get('/delete/:id?')
    async deleteProduct(@Param('id') id:number, @Response() res): Promise<any> {
        this.productService.deleteProductById(id);
        return res.redirect('/home');
    }

    @Get('/update/:id?')
    @Render('form')
    async renderUpdateView(@Param('id') id:number): Promise<any> {
        return {title: 'Actualizar', id};
    }

    @Post('/update/:id?')
    async updateProduct(@Param('id') id:number, @Body() updateProduct: ProductDto, @Response() res): Promise<any> {
        const { nombre, descripcion, precio } = updateProduct;
        if(!nombre || !descripcion || precio <= 0){
            throw new BadRequestException('El nombre y la descripción son obligatorios y el precio debe ser un número valido');
        }
        this.productService.updateProductById(id, updateProduct);
        return res.redirect('/home');
    }

    @Post('/product/new')
    async addProduct(@Body() newProduct: ProductDto, @Response() res): Promise<any> {
        const { nombre, descripcion, precio } = newProduct;
        if(!nombre || !descripcion || precio <= 0){
            throw new BadRequestException('El nombre y la descripción son obligatorios y el precio debe ser un número valido');
        }
        this.productService.addProduct(newProduct);
        return res.redirect('/home');
    }
}