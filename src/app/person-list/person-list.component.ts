import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person-service';
import { Person } from '../persons';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  person: Person[] = [];
  selectedPerson?: Person;

  constructor(private personService: PersonService) {}

  getPerson(): void {
    this.person = this.personService.getPerson();
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  ngOnInit(): void {
    this.getPerson();
  }
}
