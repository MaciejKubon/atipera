import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { SpinerComponent } from './component/spiner/spiner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, SpinerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atipera';
}
