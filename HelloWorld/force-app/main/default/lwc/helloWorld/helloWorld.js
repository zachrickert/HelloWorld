import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  input = 'World';
  greeting = ', World';
  
  str1 = ', ';

  changeHandler(event) {
    if (event.target.value != '') {
      this.greeting = this.str1.concat(event.target.value);
    } else {
      this.greeting = '!!';
    }

  }
}