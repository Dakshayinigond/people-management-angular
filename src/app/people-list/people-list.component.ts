import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
   styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    fetch('http://localhost:3000/people')
      .then(res => res.json())
      .then(data => this.people = data);
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      fetch(`http://localhost:3000/people/${id}`, {
        method: 'DELETE'
      }).then(() => {
        this.people = this.people.filter(p => p.id !== id);
      });
    }
  }
}
