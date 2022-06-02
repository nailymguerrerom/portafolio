import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   
  constructor(public _servicio:InfoPaginaService) {}

  ngOnInit(): void {}
}
