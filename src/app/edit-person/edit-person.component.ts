import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../persons';
import { PersonService } from '../person-service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person?: Person;
  selectedPerson?: Person;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) {}

  getPerson(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPersonById(id);
    this.selectedPerson = this.person;
  }

  back(): void {
    this.location.back();
  }
  save(): void {
    const person: Person = this.person as Person;
    this.personService.editPerson(person);
    this.back();
  }

  ngOnInit(): void {
    this.getPerson();
  }
}
