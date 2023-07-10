import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoService } from './notifaction/mongo.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mongoService = app.get(MongoService);
  await mongoService.connect();
  

  await app.listen(3000);
}
bootstrap();
