import * as redis from 'redis';
import log from '../logger';

class Redis {
  private client: any;

  constructor() {
    this.client = redis.createClient({
        url: 'redis://localhost:6379',
    });
    this.client.connect()
  }

  public async get(key: string) {
      try {
        let data = await this.client.get(key);
        return data;
      } catch (error) {
        log.error(error);
        return [];
      }
  
  }

  public async set(key: string, value: any) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  public quit() {
    this.client.disconnect();
  }
}

export default new Redis();
