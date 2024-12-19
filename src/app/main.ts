import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    { whitelist: true, // DTO에 없는 hacked 필드는 자동으로 제거
      forbidNonWhitelisted: true, // 아예 요청이 거부,
      transform: true, // 원하는 타입으로 전환해줌
    } 
  )); // 유효성검사사
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
