import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }
}
