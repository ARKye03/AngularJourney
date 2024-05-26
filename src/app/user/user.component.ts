import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'Angular Journey'
  user = 'Nixarkye'
  OnIt = false
  someMovies = [{
    id: 0,
    name: 'The Shawshank Redemption',
  },
  {
    id: 1,
    name: 'The Godfather',
  },
  {
    id: 2,
    name: 'The Godfather: Part II',
  },
  {
    id: 3,
    name: 'The Dark Knight',
  },
  {
    id: 4,
    name: '12 Angry Men',
  },
  {
    id: 5,
    name: 'Schindler\'s List',
  },
  {
    id: 6,
    name: 'Pulp Fiction',
  },
  {
    id: 7,
    name: 'The Lord of the Rings: The Return of the King',
  },
  {
    id: 8,
    name: 'The Good, the Bad and the Ugly',
  },
  {
    id: 9,
    name: 'Fight Club',
  },
]
  GreetMe() {
    alert('Hello World!')
  }
}
