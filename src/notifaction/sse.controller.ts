import { Controller, Res, Sse, Query } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';
import { MongoService } from './mongo.service';

@Controller('notification')
export class SSEController {
  constructor(private readonly mongoService: MongoService) {}

  @Sse('sse')
  sse(@Res() res: Response, @Query('id') id: string): Observable<{ data: any }> {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    return from(this.mongoService.getSpecificData(id)).pipe(
      map((feedback) => ({
        data: feedback,
      }))
    );
  }
}
