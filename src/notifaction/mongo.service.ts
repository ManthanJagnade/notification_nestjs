import { Injectable } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class MongoService {
  private db: Db;

  async connect(): Promise<void> {
    const client = new MongoClient('mongodb://127.0.0.1:27017/?readPreference=primary&ssl=false&directConnection=true');

    try {
      await client.connect();
      this.db = client.db('Dynamic_Notifaction');
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
    }
  }

  getDb(): Db {
    return this.db;
  }

  async getSpecificData(studentId: string): Promise<any> {
    try {
      const collection = this.db.collection('data');
      const pipeline = [
        {
          $match: { id: studentId },
        },
       
      ];
      const specificData = await collection.aggregate(pipeline).toArray();
      return specificData;
    } catch (err) {
      console.error('Failed to get specific data', err);
      throw err;
    }
  }

}












//   async createNotification(notificationDto: any): Promise<any> {
//     try {
//       const result = await this.collection.insertOne(notificationDto);
//       return result;
//     } catch (err) {
//       console.error('Failed to create notification', err);
//       throw err;
//     }
//   }

//   sendNotification(message: string): void {
//     // Implement your logic to send notifications here
//     console.log(`Sending notification: ${message}`);
//   }
// 
