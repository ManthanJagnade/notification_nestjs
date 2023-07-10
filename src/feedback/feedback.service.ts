import { Injectable } from "@nestjs/common";
import { Db, MongoClient } from "mongodb";

@Injectable()
export class FeedbackService{

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
}