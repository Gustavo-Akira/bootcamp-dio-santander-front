import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from 'src/app/shared/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly baseurl = 'https://bootcamp-dio-santander-gustavo.herokuapp.com/bootcamp/'
  constructor(private http: HttpClient) {

  }
  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(this.baseurl +"/stock").toPromise();
  }
}
