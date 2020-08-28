import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  node = {
      name: 'Role 1',
      subNodes: [
          {
              name: 'Role 2.1',
              subNodes: [
                  { name: 'Role 3.1' },
                  { name: 'Role 3.2' },
                  { name: 'Role 3.3' },
                  { name: 'Role 3.4' },
              ]
          },
          {
              name: 'Role 2.2'
          }
      ]
  };
}
