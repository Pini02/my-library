import { NestFactory } from '@nestjs/core';
import { LibraryAdminModule } from './library-admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Library Admin API')
    .setDescription('The Library Admin API description')
    .build();
  const app = await NestFactory.create(LibraryAdminModule);
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document());
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
