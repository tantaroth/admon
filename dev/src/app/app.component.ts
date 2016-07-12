import { Component } from '@angular/core';
import { SafeComponent } from './safe/safe.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SafeComponent]
})
export class AppComponent {
  title = 'app works!';
}
