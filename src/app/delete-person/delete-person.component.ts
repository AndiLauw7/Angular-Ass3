import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PersonService } from '../person-service';
import { Person } from '../persons';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css'],
})
export class DeletePersonComponent implements OnInit {
  person?: Person;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private personService: PersonService
  ) {}

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPersonById(id);
  }

  back(): void {
    this.location.back();
  }

  deletePerson(): void {
    const person: Person = this.person as Person;
    this.personService.deletePerson(person);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.getPerson();
  }
}
