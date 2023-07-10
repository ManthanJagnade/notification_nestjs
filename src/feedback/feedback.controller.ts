import { Controller, Post, Body } from '@nestjs/common';
import { UserDTO } from '../user.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('data')
  async sendNotification(@Body() data: UserDTO): Promise<void> {
    try {
      await this.feedbackService.connect(); // Connect to the database
      const collection = this.feedbackService.getDb().collection('data');
      await collection.insertOne(data);
      console.log('Data inserted successfully');
    } catch (err) {
      console.error('Failed to insert data', err);
    }
  }
}
