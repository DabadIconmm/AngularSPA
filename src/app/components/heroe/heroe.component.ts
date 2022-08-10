import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute) {
    //De esta manera retornamos ":id" o los parámetros que se estén pasando en este momento
    this.activatedRoute.params.subscribe((params) =>
      //sabemos que recibe ":id"
      console.log(params['id'])
    );
  }

  ngOnInit(): void {}
}
