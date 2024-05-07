import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ProductController } from './controllers/product.controller';
import { UserService } from './services/user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [AuthController, ProductController],
  providers: [UserService, LocalStrategy, ProductService],
})

export class AppModule {}