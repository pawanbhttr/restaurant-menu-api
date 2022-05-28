import { Controller, Get, Post, Delete, Put, Body, Param, HttpCode } from '@nestjs/common';
import { FoodService } from 'src/core/services/food.service';
import { Food } from 'src/core/entity/food.entity';
import { FoodDto } from 'src/core/common/dto/food.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Food")
@Controller('api/foods')
export class FoodController {
    constructor(private readonly foodService: FoodService) { }

    @Post()
    async create(@Body() model: FoodDto) {
      await this.foodService.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: FoodDto) {
        await this.foodService.update(id,model);
    }
  
    @Get()
    async findAll(): Promise<Food[]> {
        return this.foodService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Food> {
      return this.foodService.findById(id);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.foodService.delete(id);
    }
}
