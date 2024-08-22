import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface CacheContent {
  expiry: number;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class CustomcacheService {

  private cacheData = new Map<string, CacheContent>();
  constructor() { }

  private setDataToCache(key: string, value: any, ttl: number = 20000): Observable<any> {
    const expiry = new Date().getTime() + ttl;
    this.cacheData.set(key, { expiry, value });
    return of(value);
  }

  private getDataFromCache(key: string): Observable<any> | undefined {
    const data = this.cacheData.get(key);
    const now = new Date().getTime();
    if (!data) {
      return undefined;
    }
    if (now > data.expiry) {
      this.cacheData.delete(key);
      return undefined;
    }

    return of(data.value);
  }


  cachedData(key: string, url: string): Observable<any> | any {
    const cached = this.getDataFromCache(key);
    if (cached) {
      return cached;
    } else {
      return this.setDataToCache(key, url);
    }
  }




}
