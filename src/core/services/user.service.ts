import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "../common/dtos/create-user.dto";
import { User, UserDocument } from "../entities/user.entity";
import { Model } from "mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(model: CreateUserDto): Promise<User> {
      const createdUser = this.userModel.create(model);
      return createdUser;
    }
}