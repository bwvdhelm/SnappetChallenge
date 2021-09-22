import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  });
  await app.listen(3000);
}
bootstrap();
