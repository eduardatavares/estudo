import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nome: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome');
  }

}
