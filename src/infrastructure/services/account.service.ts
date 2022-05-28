import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccountService {
  constructor() { }

  async validateUser(): Promise<boolean> {
    return true;
  }
}
