import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CakeListComponent implements OnInit {
  cakes: { id: number; name: string; imageUrl: string; }[];

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.cakes = this.cakeService.getCakes();
  }

  handleCakeClicked(data) {
    console.log('received: ', data);
  }

}
