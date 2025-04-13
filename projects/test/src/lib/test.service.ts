import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  get(name:string) {
    return `Your name is: ${name}`
  }
}
