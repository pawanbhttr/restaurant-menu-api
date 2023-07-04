import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account.module';
import { CategoryModule } from './category.module';
import { FoodModule } from './food.module';
import { OrderModule } from './order.module';


@Module({
    imports:[
        MongooseModule.forRoot("your_mongoose_db_connection_string",{
            dbName: "restaurant"
        }),
        FoodModule,
        CategoryModule,
        OrderModule,
        AccountModule
    ],
    providers:[]
})
export class AppModule {}
