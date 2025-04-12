import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  template: `
    <div>
      <button (click)="printOutput()">{{label}}</button>
      <p>{{outputText}}</p>
    </div>
    
  `,
  styles: ``
})
export class ButtonComponent implements OnInit {
    
  @Input() label!:string;
  @Output() clicked = new EventEmitter<string>();
  
  outputText:string = '';
  private counter:number = 0;

  ngOnInit(): void {
    this.counter = 0;
  }

  printOutput():void {
    this.counter++;
    this.outputText = `Button clicked: ${this.counter} ${this.counter === 1 ? 'time' : 'times'}.`
    this.clicked.emit(this.outputText)
  }

}
