import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atipera';
}
