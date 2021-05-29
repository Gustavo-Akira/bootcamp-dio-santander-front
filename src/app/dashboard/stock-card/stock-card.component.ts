import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  
  @Input()
  stock: Stock= {
    id: 0,
    date: "",
    name: "",
    price: 0,
    variation: 0,
    minimum: 0,
    exclusiveMinimum: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string {
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }

}
