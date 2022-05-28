import { Controller, Get, Post, Delete, Put, Body, Param, HttpCode, UseGuards } from '@nestjs/common';
import { FoodService } from 'src/core/services/food.service';
import { Food } from 'src/core/entities/food.entity';
import { FoodDto } from 'src/core/common/dtos/food.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/common/guards/auth.guard';

@ApiBearerAuth()
@ApiTags("Food")
@Controller('api/foods')
@UseGuards(JwtAuthGuard)
export class FoodController {
    constructor(private readonly foodService: FoodService) { }

    @Post()
    async create(@Body() model: FoodDto) {
      return await this.foodService.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: FoodDto) {
        return await this.foodService.update(id,model);
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
