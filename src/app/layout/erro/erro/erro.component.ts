import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {
  nome: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome');
  }

}
