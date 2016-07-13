import { Component } from '@angular/core';
import { SafeComponent } from './safe/safe.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ConjunctsComponent } from './conjuncts/conjuncts.component';
import { EntitiesComponent } from './entities/entities.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ReportsComponent } from './reports/reports.component';
import { RolesComponent } from './roles/roles.component';
import { StatesComponent } from './states/states.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    SafeComponent,
    ApartmentsComponent,
    BlocksComponent,
    ConjunctsComponent,
    EntitiesComponent,
    PermissionsComponent,
    ReportsComponent,
    RolesComponent,
    StatesComponent
  ]
})
export class AppComponent {
  console.log(firebase);
  
  title = 'app works!';
}
