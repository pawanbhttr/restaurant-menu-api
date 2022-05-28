import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account.module';
import { CategoryModule } from './category.module';
import { FoodModule } from './food.module';

@Module({
    imports:[
        MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.fw7txj5.mongodb.net/?retryWrites=true&w=majority",{
            dbName: "restaurant"
        }),
        FoodModule,
        CategoryModule,
        AccountModule
    ]
})
export class AppModule {}
