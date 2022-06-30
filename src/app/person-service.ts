import { Injectable } from '@angular/core';
import { PERSON, Person } from './persons';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public person: Person[] = [];
  constructor() {}

  getPerson(): Person[] {
    return (this.person = PERSON);
  }

  getPersonById(id: number): any {
    return this.person.find((person) => person.id === id);
  }

  editPerson(person: Person): any {
    const index = this.person.findIndex((p) => p.id === person.id);
    this.person[index] = person;
  }

  deletePerson(person: Person): any {
    const index = this.person.findIndex((p) => p.id === person.id);
    this.person.splice(index, 1);
  }
}
