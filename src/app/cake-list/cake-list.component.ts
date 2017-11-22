import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CakeService } from '../cake.service';
import { Observable } from 'rxjs/Observable';
import { ICake } from '../cake.model';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CakeListComponent implements OnInit {
  cakes: ICake[];

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.cakeService
      .getCakes()
      .subscribe(c => { this.cakes = c });
  }

  handleCakeClicked(data) {
    console.log('received: ', data);
  }

}
