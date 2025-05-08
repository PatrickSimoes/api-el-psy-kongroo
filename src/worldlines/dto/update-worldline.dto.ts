import { PartialType } from '@nestjs/swagger';
import { CreateWorldlineDto } from './create-worldline.dto';

export class UpdateWorldlineDto extends PartialType(CreateWorldlineDto) {}
