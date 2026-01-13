import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('The Library API description')
    .build();
  const app = await NestFactory.create(AppModule);
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
