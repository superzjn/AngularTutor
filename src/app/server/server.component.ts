import {Component} from '@angular/core';
import {Student} from '../../shared/student.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  meat: string;
  vegetable: string;
  dishName: string;
  materials_meat: string[] = ['egg', 'beef', 'pork', 'lamb'];
  materials_vege: string[] = ['tomato', 'onion', 'garlic', 'cucumber'];

  isValid = false;
  isNotValid = false;
  counter = 0;
  isLogin = false;
  userName: string;
  students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    new Student('Steve Jobs', 'Computer Science'),
    new Student('Elon Musk', 'Computer Science')];

  cook() {
    if ((this.materials_meat.indexOf(this.meat) === -1 || this.materials_vege.indexOf(this.vegetable) === -1)) {
      this.isNotValid = true;
    } else {
      this.generateDish();
      this.isValid = true;
    }
  }

  generateDish() {
    if (this.meat === 'pork') {
      switch (this.vegetable) {
        case 'garlic': {
          this.dishName = 'Garlic Good Pork';
          console.log(this.dishName);
          break;
        }
        case 'Onion': {
          this.dishName = 'Onion Fried with Pork';
          break;
        }
        default: {
          this.dishName = 'Dark Dish';
          break;
        }
      }
    } else if (this.meat === 'beef') {
      switch (this.vegetable) {
        case 'garlic': {
          this.dishName = 'Garlic Good Beef';
          break;
        }
        case 'onion': {
          this.dishName = 'Onion Fried with Beef';
          break;
        }
        case 'tomato': {
          this.dishName = 'Tomato Beef';
          break;
        }
        default: {
          this.dishName = 'Dark Dish';
          break;
        }
      }
    } else {
      this.dishName = 'Dark Dark Dish';
    }
  }

  reset() {
    this.meat = '';
    this.vegetable = '';
    this.isNotValid = false;
    this.isValid = false;
  }

  counterPlus() {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }

  login() {
    this.isLogin = true;
  }

  signOut() {
    this.isLogin = false;
  }
}
