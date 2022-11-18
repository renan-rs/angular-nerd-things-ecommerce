import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  faSearch = faSearch;
  descricao:string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}})
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
