import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  id!: number;
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    fetch(`http://localhost:3000/people/${this.id}`)
      .then(res => res.json())
      .then(data => this.person = data);
  }

  updatePerson() {
    fetch(`http://localhost:3000/people/${this.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.person)
    }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
