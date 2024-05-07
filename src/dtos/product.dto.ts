import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class ProductDto{

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsPositive()
    precio: number;

}