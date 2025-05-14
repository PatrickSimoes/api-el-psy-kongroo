import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

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

  async create(dto: CreateUserDto): Promise<User> {
    // (1) checar existência…
    const exists = await this.userModel.findOne({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException('Email já está em uso');

    // (2) gerar hash
    const hash = await bcrypt.hash(dto.password, 10);

    // (3) build + save
    const user = this.userModel.build({
      name: dto.name,
      email: dto.email,
      password: hash,
    });
    return await user.save();
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userModel.update(id, updateUserDto);

    if (result.affected === 0) {
      this.logger.warn(`Guest with id ${id} not found for update`);
      throw new NotFoundException(`Guest with id ${id} not found`);
    }

    const updatedUser = await this.findOne(id);

    this.logger.log(`Guest with id ${id} updated successfully`);

    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);

    await this.userModel.softDelete(user);

    return;
  }
}
