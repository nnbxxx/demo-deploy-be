import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schemas';
import { UsersModule } from '../users/users.module';
import { InventoryProductModule } from '../inventory-product/inventory-product.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { CategoriesModule } from '../categories/categories.module';
import { User, UserSchema } from '../users/schemas/user.schema';
import { InventoryProduct, InventoryProductSchema } from '../inventory-product/schemas/inventory-product.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: User.name, schema: UserSchema }, { name: InventoryProduct.name, schema: InventoryProductSchema }]),
    UsersModule,
    InventoryProductModule,
  forwardRef(() => ReviewsModule),
    CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule { }
