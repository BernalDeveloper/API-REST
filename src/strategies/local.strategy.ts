import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly userService:UserService){
        super();
    }

    async validate(username:string, password:string):Promise<any>{
        const user = await this.userService.findByUsername(username);
        if(!user || !bcrypt.compareSync(password, user.password)){
            throw new UnauthorizedException();
        }
        return user;
    }
}