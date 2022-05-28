import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from 'src/application/controllers/food.controller';
import { Food, FoodSchema } from 'src/core/entity/food.entity';
import { FoodService } from 'src/core/services/food.service';

@Module({
    imports:[MongooseModule.forFeature([{name: Food.name, schema: FoodSchema}])],
    controllers: [FoodController],
    providers: [FoodService],  
})
export class FoodModule {}
