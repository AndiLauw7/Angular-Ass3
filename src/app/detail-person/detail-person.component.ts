import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../persons';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css'],
})
export class DetailPersonComponent implements OnInit {
  @Input() person?: Person;
  constructor(private router: Router) {}

  editPerson(person: Person): void {
    this.router.navigate(['person', person?.id]);
  }

  deletePerson(person: Person): void {
    this.router.navigate(['delete', person?.id]);
  }

  ngOnInit(): void {}
}
