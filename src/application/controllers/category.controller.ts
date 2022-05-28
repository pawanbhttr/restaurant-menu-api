import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Category } from 'src/core/entity/category.entity';
import { CategoryService } from 'src/core/services/category.service';
import { CategoryDto } from 'src/core/common/dto/category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Category")
@Controller('api/categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    async create(@Body() model: CategoryDto) {
      await this.categoryService.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: CategoryDto) {
        await this.categoryService.update(id,model);
    }
  
    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Category> {
      return this.categoryService.findById(id);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.categoryService.delete(id);
    }
}
