import { Component, Input } from '@angular/core';

@Component({
  selector: '[appNode]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
    @Input() public node = {
        name: '',
        subNodes: []
    };
}
