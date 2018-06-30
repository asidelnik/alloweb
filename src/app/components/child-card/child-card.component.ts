import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Child } from  '../../models/child';


@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {

  @Input() child: Child = new Child();
//   @Output() clickedChild: EventEmitter<Child> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
//   childWasClicked(child: Child) {
//     this.clickedChild.emit(child);
//   }

}
