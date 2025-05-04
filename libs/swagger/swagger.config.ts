import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Steins;Gate Wiki API')
    .setDescription('API RESTful para o universo Steins;Gate')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Insira o token JWT no campo “Authorize” acima',
      },
      'JWT-auth',
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
