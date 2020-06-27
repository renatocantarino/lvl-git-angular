import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositorioDTO } from '../dtos/repositorio.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nomeUsuario: string = ""
  repositorioDTO: RepositorioDTO[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }
  Repos() {

    if (this.nomeUsuario === "")
      return

    this.repositorioDTO = [];
    this.httpClient.get<any[]>(`https://api.github.com/users/${this.nomeUsuario}/repos`).subscribe(
      data => {
        console.log(data)
        data.forEach(repo => {
          this.repositorioDTO.push(repo.name)
        })
      }
    );
  }

  Starred() {
    if (this.nomeUsuario === "")
      return

    this.repositorioDTO = [];
    this.httpClient.get<any[]>(`https://api.github.com/users/${this.nomeUsuario}/starred`).subscribe(
      data => {
        data.forEach(repo => {
          this.repositorioDTO.push(repo.name)
        })
      });
  }

}
