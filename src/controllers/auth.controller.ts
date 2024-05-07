import { Controller, Get, Render, Post, Request, UseGuards, Response} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController{

    constructor(){}

    @Get('/')
    @Render('login')
    getLogin(){
        return { title: 'Iniciar Sesion'};
    }

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    postLogin(@Request() req, @Response() res):Promise<any>{
        return res.redirect('/home');
    }
}