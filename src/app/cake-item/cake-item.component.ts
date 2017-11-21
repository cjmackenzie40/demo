import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cake-item',
  templateUrl: './cake-item.component.html',
  styleUrls: ['./cake-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CakeItemComponent implements OnInit {
  @Input() cake: any;
  @Output() cakeClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  cakeClicked() {
    this.cakeClick.emit(this.cake.id);
  }

}
