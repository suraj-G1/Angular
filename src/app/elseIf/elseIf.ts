import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseIf.html',
  styleUrl: './elseIf.css',
})
export class ElseIf {
  selectedColor: String = '';

  setSelectedColor(color: String) {
    this.selectedColor = color;
  }
}
