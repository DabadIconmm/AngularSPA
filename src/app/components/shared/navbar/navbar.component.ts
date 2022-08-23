import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
})
export class NavComponent {
  constructor(private _heroesService: HeroesService, private router: Router) {}

  navName = 'Spa Nav';

  searchHeroe(value: string) {
    console.log('Busqueda: ' + value);

    this.router.navigate(['/searchHeroe/', value]); //siempre con [] porque devuelve un array
  }
}
