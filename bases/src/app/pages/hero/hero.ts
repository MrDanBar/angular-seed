import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero.html'
})
export class Hero {

  name = signal('Daniel Boom')
  age = signal(34)

  changeHero() {
    this.name.set('Peter Parker')
    this.age.set(19)
  }

  changeAge(value: number) {
    this.age.set(value);
  }

  getHeroDescription(): String {
    return `My name is ${this.name()} and I'm ${this.age()} years old.`
  }

  resetForm() {
    this.name.set('Daniel Boom')
    this.age.set(34)
  }
}
