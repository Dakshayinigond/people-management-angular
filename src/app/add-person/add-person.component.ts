import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {

  person = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addPerson() {
    this.http.post('http://localhost:3000/people', this.person)
      .subscribe(() => {
        alert('Person added successfully');
        this.router.navigate(['/']);
      });
  }
}
