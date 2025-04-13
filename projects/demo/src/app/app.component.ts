import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../button/src/public-api';
import { TestService } from '../../../test/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  private userName!:string;
  output:string = '';

  constructor(private testService: TestService) {}

  getName() {
    const input = (<HTMLInputElement>document.getElementById('input-name'));
    input.value !== "" ? 
    this.output = this.testService.get(input.value) :
    this.output = 'You must provide you name';
    input.value = ''; 
  }
}
