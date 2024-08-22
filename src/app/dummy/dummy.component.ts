import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent implements OnInit {
  data?: any[];

  constructor(private cacheService: CacheService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const url = 'https://dummyjson.com/products?limit=5';
    this.cacheService.cacheObservable(url, this.http.get(url)).subscribe(res => {
      this.data = res.products;
    });
  }
}
