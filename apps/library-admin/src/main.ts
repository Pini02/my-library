import { NestFactory } from '@nestjs/core';
import { LibraryAdminModule } from './library-admin.module';

async function bootstrap() {
  const app = await NestFactory.create(LibraryAdminModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
