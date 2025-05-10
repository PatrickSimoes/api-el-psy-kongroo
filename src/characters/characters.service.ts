import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { Character } from './entities/character.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UniqueConstraintError } from 'sequelize';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character)
    private readonly characterModel: typeof Character,
  ) {}

  /**
   * Creates a new Character from the provided DTO,
   * handling possible unique-constraint errors.
   *
   * @param dto - data for the new character
   * @returns the newly created Character
   * @throws ConflictException if email already exists
   * @throws InternalServerErrorException on other failures
   */
  async create(dto: CreateCharacterDto): Promise<Character> {
    try {
      const character = await this.characterModel.create(dto);
      return character;
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        throw new ConflictException('A character with this email already exists.');
      }
      throw new InternalServerErrorException('Internal server error while creating character.');
    }
  }

  /**
   * Retrieves all Character records.
   *
   * @returns an array of Characters
   */
  async findAll(): Promise<Character[]> {
    return this.characterModel.findAll();
  }

  /**
   * Retrieves a single Character by its ID.
   *
   * @param id - the UUID of the character
   * @returns the found Character
   * @throws NotFoundException if no Character with that ID exists
   */
  async findOne(id: string): Promise<Character> {
    const character = await this.characterModel.findByPk(id);
    if (!character) {
      throw new NotFoundException(`Character with id "${id}" not found.`);
    }
    return character;
  }

  private async findOneOrFail(id: string): Promise<Character> {
    const character = await this.characterModel.findByPk(id);

    if (!character) {
      throw new NotFoundException(`Character com id "${id}" não encontrado`);
    }

    return character;
  }

  async replace(
    id: string,
    dto: CreateCharacterDto,
  ): Promise<{ entity: Character; created: boolean }> {
    const existing = await this.characterModel.findByPk(id);

    if (!existing) {
      const createdEntity = await this.characterModel.create({ id, ...dto });
      return { entity: createdEntity, created: true };
    }

    await existing.update(dto);
    return { entity: existing, created: false };
  }

  async update(id: string, dto: UpdateCharacterDto): Promise<Character> {
    const character = await this.findOneOrFail(id);

    await character.update(dto);
    return character;
  }

  async destroy(id: string) {
    const character = await this.findOne(id);

    if (character === null) {
      throw new NotFoundException('this character is not faund');
    }

    const deletedCount = await this.characterModel.destroy({
      where: { id: character.id },
    });

    if (deletedCount === 0) {
      throw new InternalServerErrorException('Falha ao deletar o character');
    }
  }
}
