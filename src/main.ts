import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { setupSwagger } from 'libs/swagger/swagger.config';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  const port = process.env.PORT || 3000;

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port);

  Logger.log(`Application is running on: http://localhost:${port}`);
}
void bootstrap();
