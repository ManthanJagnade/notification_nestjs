import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SSEController } from './notifaction/sse.controller';
import { MongoService } from './notifaction/mongo.service';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';

@Module({
  imports: [],
  controllers: [SSEController,FeedbackController],
  providers: [MongoService,FeedbackService],
})
export class AppModule {}













// @Module({
//   imports: [],
//   controllers: [SSEController],
//   providers: [
//     MongoService,
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: <appropriate_interceptor_class>,
//     },
//   ],
// })
// export class AppModule {}
