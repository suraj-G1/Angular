import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ElseIf } from './elseIf/elseIf';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, ElseIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('control-flow');
}
