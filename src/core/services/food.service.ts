import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food, FoodDocument } from '../entities/food.entity';
import { FoodDto } from '../common/dtos/food.dto';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<FoodDocument>) { }

  async create(model: FoodDto): Promise<Food> {
    const createdFood = this.foodModel.create(model);
    return createdFood;
  }

  async findAll(): Promise<Food[]> {
    return await this.foodModel.find().exec();
  }

  async findById(id:string): Promise<Food> {
    return await this.foodModel.findById(id).exec();
  }

  async update(id:string, model: FoodDto): Promise<Food> {
    return await this.foodModel.findByIdAndUpdate(id, model, { new: true });
  }

  async delete(id:string): Promise<any> {
    return await this.foodModel.findByIdAndRemove(id);
  }
}
