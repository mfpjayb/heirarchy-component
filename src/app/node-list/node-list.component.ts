import { Component, Input } from '@angular/core';

@Component({
  selector: '[appNodeList]',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent {
    @Input() subNodes = [];
}
