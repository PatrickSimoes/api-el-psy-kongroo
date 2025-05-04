import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { setupSwagger } from 'libs/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  Logger.log(`Application is running on: http://localhost:${port}`);
}
void bootstrap();
