import { PartialType } from '@nestjs/mapped-types';
import { CreateWorldlineDto } from './create-worldline.dto';

export class UpdateWorldlineDto extends PartialType(CreateWorldlineDto) {}
